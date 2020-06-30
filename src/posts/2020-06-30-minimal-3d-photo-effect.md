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

# Prepare a photo and a depth map
---

To produce a 3D Photo effect, we first need a photo and a depth map. Here is an example:

|Original photo|Depth map|
|:-:|:-:|
|![Original photo](/assets/3d-photo-original.jpg)|![Depth map](/assets/3d-photo-depth.png)|

Normally you can draw this depth map yourself - basically darker regions indicate greater depths, and whiter regions means closer to the camera. Some newer phones also have depth-sensing capability which can be used to quickly generate depth maps.




# Minimal code 3D Photo with PixiJS
---

PixiJS - out of the box, offers various filters, one of which is the [DisplacementFilter](https://pixijs.download/dev/docs/PIXI.filters.DisplacementFilter.html) which can be used to easily create parallax-like effect. It also accepts (optionally) a depth map to create even more convincing 3D effect.



# "Real" 3D Photo
---