---
title: "What is impressive about the GPT-4o demo"
date: 2024-05-16
tags: [ai]
published: true
---

[[snippet]]
|OpenAI and Google just dropped latest updates on their respective AI initiatives, and I'm impressed. Time to dust off the blog and jot down what exactly is impressive about some of those, from the perspective of someone who attempted to do _all of it_

<iframe width="560" height="315" src="https://www.youtube.com/embed/vgYi3Wr7v_g?si=G9OOCORw2C-Tb5yM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

First video is a statement - that shows some impressive response times.

We have to go a step back - previously GPT-4 was hampered by slow response time. Streaming text/API was a mere trick to hide that fact. If you want to give it a few paragraphs of text and ask it to translate to a different language, and get the result all at once, it would have taken upwards of ~10-20 seconds.

Having such fast response times - as shown in this video, indicates either: it returns text fast enough - that the text can then be synthesized into speech, or more likely, it's outputting audio directly instead of using text as a medium.

Furthermore, having the ability to interrupt instead of turn-based chat (albeit still unnatural) means audio is likely the model input. Previously, everything was: wait for audio signals to indicate sentence start/stop, translate to text (e.g [whisper](https://github.com/openai/whisper)), then sends to the model. All your semi-on-device assistants (Google Assistant or Gemini, Siri, Cortana whatnot) all worked this way. That's no longer the case here. It's also able to _not_ reply to its own output audio - this might seems dumb but it's a legit concern.

Another thing: video might also be an input. Previously, even for Google's previous [Gemini Pro announcement](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/#sundar-note), the only way to do video input is to slice it into a series of images. As in - the input to the model would be a series of colaescing text and images, like `[image, image, image, text]`. Now that we have audio in the equation, even I'm not sure what the input format for GPT-4o looks like. It could be `[image, audio, image, audio]`. That also means we no longer have coherent, fully formed sentences as input - in either text or audio form. This is wild - I have no idea how that works!

The indication of all this: audio & video seems like a new input/output modal. It's always been desirable to do multimodal, the main blocker was computational resources (training + inference). It's impressive if OpenAI can do this at scale with costs and latencies low enough - and sure enough, they're able to make it free (!), while being 2x faster than GPT-4 turbo (according to the [release blog](https://openai.com/index/hello-gpt-4o/))

<iframe width="560" height="315" src="https://www.youtube.com/embed/MirzFk_DSiI?si=NsTCHAIMOzVtMiNF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

2nd video reinforces the latency and emphasizes _recall_.

The highlight is the "bunny ears" section. Context has always been a limitation for transformers-based models. Even when companies started rolling out models with 1m tokens context lengths - recall drops off significantly after a certain (short) length. It's never been able to fully use the 1m tokens context length.

Videos are information-dense, much more so than text. You need a lot of tokens to represent 1s of video. Being able to ask about something a few seconds in the past means the model is able to use video as input and able to recall up to that length.

Another thing is that we have 3 participants in the chat, and possibly, built-in [speaker diarisation](https://en.wikipedia.org/wiki/Speaker_diarisation) as an effect of having multimodal input.

<iframe width="560" height="315" src="https://www.youtube.com/embed/WzUnEfiIqP4?si=NT_uHA5YlKTymwuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

This is a very practical application of AI, one that companies have been trying and failing (see Samsung Galaxy S24). To Samsung's credit they were trying to do it on device, but the quality are reportedly horrible. I always found GPT-4 to give the best translations among the languages I need, especially Japanese where the articles are ambiguous compared to English.

<iframe width="560" height="315" src="https://www.youtube.com/embed/D9byh4MAsUQ?si=PAOV39IR7BP5cMCJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

This video highlights the benefits of having the model directly outputting audio: Intonation, volume and all. It can _almost_ make music! I feel like the specialized music synthesis companies will still do better for some time, but that's not the point here.

At this point I feel like if I list out all the videos I'll be repeating myself a lot, it's more of the same. Maybe I'll update if I see anything else.

# Conclusion:

This is all very impresive, but for most current use cases, not much is going to change.

To the average user, you can now get a sci-fi-esque voice and video assistant. This might make it more popular with the masses, or they might soon bump into the current limitations (e.g asking what this plan is and have it confidently tell the wrong species). As it is right now, the point-at-image-and-explain use case is still extremely inaccurate for anything serious. Personally I'm only excited for the real-time interpreter use case.

For developers, we obviously welcome the 2x latency and cost reduction. It might allow better response times and maybe more complex reasoning. But otherwise not much is going to change (yet). For the time being, since voice and video is not yet released to API users, and the new model is not leapfrogging GPT-4 on benchmarks, it's going to be an incremental improvement on existing use cases.

Once voice and video rolled out, we might expect more use cases, i.e use voice commands to do stuffs. I feel like this is still more or less a novelty - not sure how people are going to adapt to talking to apps in public. In somewhere like Japan you're going to get a lot of glances for that. It seems like a huge win for accessibility, but that should still be in the minority of the market. We'll see.