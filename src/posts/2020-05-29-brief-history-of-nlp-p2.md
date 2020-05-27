---
title: A history of progress on text representation in NLP (Part 2 - Sentence-level representation)
date: 2020-05-27
tags: [ai]
published: false
---

# Introduction
---

[[snippet]]
|In the last part I talked about various ways of representing word as vectors in NLP. However, most state-of-the-art models (as of 2020 anyway) do not even care about word vectors at all! So what happened?

It should be obvious that using word vectors leave out an important aspect of all languages: word context. Words should not be treated individually, because a single word can have multiple and vastly different meanings in different contexts - consider `content` in `table of contents` and `I am content with my job`.

In the end, most applications of NLP would require using sentences or even paragraphs or documents level representations. Examining word vectors remain mostly useful for analyzing and validating linguistic properties. That's why this part will probably drag out way longer than the first.

# Progress on sentence representation
---

# 1. Bag of Words

The original bag of words model involve counting occurences of words and putting inside a fixed-size dictionary vector. This is one-hot encoding on the sentence level - as illustrated below:

A dictionary such as:
```python
["the", "quick", "brown", "fox", "jumps", "dog", "like"]
```

Would represent the sentence `I like dog but I do not like fox` (forgive the grammar, it's beside the point) as:

|the|quick|brown|fox|jumps|dog|like|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|0|0|0|1|0|1|2|

Which is actually the sum of one-hot encoded word vectors!

Using word vectors, the bag of words model is either the sum or the average of word vectors.

As immediately evident, this method disregards contextual information and word ordering. Used for sentence/document classification, it would be a glorified checking substrings algorithm.