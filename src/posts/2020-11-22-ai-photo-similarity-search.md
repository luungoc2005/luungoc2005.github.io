---
title: "How to build a simple AI photo search engine"
date: 2020-11-22
tags: [web]
published: true
---

# Introduction
---

[[snippet]]
|Have you ever wondered how you could build your own Google Image Search? This tutorial will walk you through so you can build your own in 15 minutes.

# Idea: Image encodings
---

Often the most obvious kind of search engine to build would be to search for text. However, for all types of data that are not convertible to text - e.g Music, text-like searching is not always feasible.

So how would you build a image search engine? a few ideas come to mind: To compare the pixels of the photos: this will only find exact same photos or with different lighting conditions. Or we can use _AI_ to convert a photo into a text that describes the photo: this, for example, will struggle to differentiate between different kinds of cats, if it can only infer that the photo contains a cat but not _which_ breed.

Instead, if we can somehow convert a photo into a _vector_, we can measure the distance then rank all the distances and find the closest photos.

We can do this by using almost any image neural network, however the most common, for good reasons, are ones trained on ImageNet.

ImageNet models are models trained to classify the 1000 different objects in the ImageNet dataset. The last layer of an ImageNet model would be a 1000 dimension - classification logits layer. In order to take image encoding from a ImageNet model, we can take the outputs from the _second-to-last_ layer instead, which would contain the information derived from all the upstream layer and are important for the classification.

For illustration, I'm going to use MobileNet - one of the most lightweight ImageNet-trained models, along with Pytorch. For different models, you might need to use GPU to obtain reasonable performance.

```python
import torch
from torchvision import transforms
from PIL import Image

def encode_image(file_path):
    # Taken from https://pytorch.org/hub/pytorch_vision_mobilenet_v2/
    transform_test = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ])

    class Flatten(torch.nn.Module):
        def __init__(self):
            super().__init__()

        def forward(self, x):
            # Reshapes the input into a 2d array of (batch_size, n)
            return x.view(x.size(0), -1)

    model = torch.hub.load('pytorch/vision:v0.6.0', 'mobilenet_v2', pretrained=True)

    # replace the classifier layer with the Flatten() layer
    model.classifier = Flatten()
    model.eval()

    with open(file_path, 'rb') as fp:
        img = Image.open(fp)
    input_tensor = transform_test(img)
    input_batch = input_tensor.unsqueeze(0)

    with torch.no_grad():
        output = model(input_batch)[0]

    return output.cpu().numpy()
```

This is a powerful concept, and basis for many AI-based search: This is especially true for Encoder-Decoder (e.g Seq2Seq) kinds of architecture - where there is a "bottleneck" layer, you can use the vector output of that layer to use a compressed the representation of the input. Therefore this can also apply to text semantic searching or face recognition (i.e by using a face encoder model).

# Idea: Vector similarity
---

The output of the above `encode_image()` function will be a vector - so how would you compare between vectors? that would be by calculating distance. One straightforward way to do this is by:

```python
import numpy as np
distance = np.linalg.norm(vector1 - vector2, axis=0)
```

You can then call `encode_image()` for every image in your library to "index" it. You can then encode any given photo and compare to look for the desired photo. It might take some experimentation to find out a **threshold** for a "match" result - otherwise you can only rank the results - from most similar to least.

For example, for these photos:

|Photo 1|Photo 2|
|:-:|:-:|
|![Dog](/assets/photo-similarity-dog.jpg)|![Cat](/assets/photo-similarity-cat.jpg)|

**distance = 24.56893**

|Photo 1|Photo 2|
|:-:|:-:|
|![Cat](/assets/photo-similarity-cat.jpg)|![Cat](/assets/photo-similarity-cat2.jpeg)|

**distance = 16.510061**

For the example above, a threshold that would be able to differentiate between dogs and cats, but can find different spieces of dogs or cats, would lie between **~16-24**

This is but one crude method of searching by measuring vector similarity. If you were to use this, you would need a loop through all the vector-encoded images and calculate the distance between the input photo and each target photo.

One can use several different methods to scale up vector similarity-based search, which I will write about in a separate article.