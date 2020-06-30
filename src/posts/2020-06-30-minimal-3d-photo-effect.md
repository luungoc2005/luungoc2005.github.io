---
title: "Minimal 3D Photo effect on the web"
date: 2020-06-30
tags: [web]
published: true
---

# Introduction
---

[[snippet]]
|The [3D Photo effect](https://www.techradar.com/sg/how-to/facebook-3d-photo) - popularized by Facebook, is immensly satisfying to look at. It can make for pretty parallax-like background effects, and it can be partially replicated in 10 minutes with just a few easy steps!

Check out the final effect here:
https://codepen.io/luungoc2005/pen/mdVBZxm

# Prepare a photo and a depth map
---

To produce a 3D Photo effect, we first need a photo and a depth map. Here is an example:

|Original photo|Depth map|
|:-:|:-:|
|![Original photo](/assets/3d-photo-original.jpg)|![Depth map](/assets/3d-photo-depth.png)|

Normally you can draw this depth map yourself - basically darker regions indicate greater depths, and whiter regions means closer to the camera. Some newer phones also have depth-sensing capability which can be used to quickly generate depth maps.

For this post, however, I tried to find a depth estimation AI model - which led me to [this UNet-based model and demo repository](https://github.com/EPFL-VILAB/XTConsistency#quickstart-run-demo-locally). The README provides excellent instructions on how to quickly setup and run the demo locally, taking a random photo of your choice and exporting to a depth map.

This code, however, generate _inverted_ depth maps compared to our requirements. Therefore I made some modifications to `demo.py` to invert the colors and increase the color contrast so the depths are more pronounced.

```python
# ...
# Remove center crop to take in the entire photo
trans_totensor = transforms.Compose([
    transforms.Resize(
        (256, 256), interpolation=PIL.Image.BILINEAR
    ),
    transforms.ToTensor()
])

# ...
from PIL import Image, ImageOps, ImageEnhance

# Run the image through the model forward()
baseline_output = model(img_tensor).clamp(min=0, max=1)
res = trans_topil(baseline_output[0])

# Invert black and white
res = ImageOps.invert(res)

# Increase contrast
enhancer = ImageEnhance.Contrast(res)
res = enhancer.enhance(5)

# Save the output
res.save(args.output_path+'/'+output_file_name+'_'+args.task+'_'+type+'.png')
```

Side note: Given that the model is UNet-based - the intuition here is the model does not actually "estimate" the depth of the image as how humans would, but rather it does so by identifying the different objects and draw regions on the image. As such, it would work better for certain objects and scenes compared to others. In this case, this model would work best for indoor furniture scenes, as those are abundant in its training dataset.

# Minimal code 3D Photo with PixiJS
---

PixiJS - out of the box, offers various filters, one of which is the [DisplacementFilter](https://pixijs.download/dev/docs/PIXI.filters.DisplacementFilter.html) which can be used to easily create parallax-like effect. It also accepts (optionally) a depth map to create even more convincing 3D effect.

We can tie the x, y parameters of the filter to a `mousemove` event or even [Gyroscope](https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope) callback so to create the effect of the camera following the user's interactions.

```html
<html>
  <head>
    <meta charset="UTF-8">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js"></script>
  </head>
  <body>
    <div id="test_app" style="width: 500px; height: 500px"></div>
    
    <script>
      const IMG_WIDTH = 300;
      const IMG_HEIGHT = 381;
      const SCALE_FACTOR = 25;
      
      const app = new PIXI.Application({
        width: IMG_WIDTH, 
        height: IMG_HEIGHT
      });
      const container = document.getElementById("test_app");

      container.appendChild(app.view);

      const img = new PIXI.Sprite.from("test.jpg");
      img.width = IMG_WIDTH;
      img.height = IMG_HEIGHT;
      app.stage.addChild(img);

      depthMap = new PIXI.Sprite.from("test_depth_consistency.png");
      depthMap.width = IMG_WIDTH;
      depthMap.height = IMG_HEIGHT;
      app.stage.addChild(depthMap);

      displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
      app.stage.filters = [displacementFilter];

      container.addEventListener("mousemove", (e) => {
        displacementFilter.scale.x = (IMG_WIDTH / 2 - e.clientX) / SCALE_FACTOR;
        displacementFilter.scale.y = (IMG_HEIGHT / 2 - e.clientY) / SCALE_FACTOR;
      })
    </script>
  </body>
</html>
```

# "Real" 3D Photo effect
---

The "3D Photo" effect is, in fact, a rather popular research area, and thorough implementation would require additional techniques, including inpainting - to predict the "missing" bits of image when we change camera angles. Our effect is merely blending/bluring it, making it a bit jarring, but we can mask it by lowering the change in camera angle.

This is an example of the fully-fledged effect:

<iframe width="560" height="315" src="https://www.youtube.com/embed/FZZ9rpmVCqE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This of course, would only be viewable in video format at the moment because of the computational requirements for inpainting. However, you can also seek the video with `mousemove` or `Gyroscope` event to create interactivity.

With time, it _might_ be also possible for me to compress the model (which will require some retraining or distillation) so it can be run in the browser. For now I can't really see much practicality for it. Please contact me if you are interested. Cheers!