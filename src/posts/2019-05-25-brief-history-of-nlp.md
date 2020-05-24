---
title: A history of progress on text representation in NLP
date: 2019-05-25
tags: [ai]
published: true
---

## Introduction

To start this off with a bit of personal background story: As far as formal education goes - I am no expert on AI. However that I managed to pick up and rapidly learn AI over the years - is due to the creative - but - intuitive nature of the ideas that are regularly churned out and experimented with, leading to state-of-the-art results.

[[snippet]]
|In this article, I will outline through some of the most popular breakthroughs in AI - with hope to inspire people on diving in deeper and experiment more - maybe even revisit old techniques and apply on top of newer architectures.

I will skim on a lot of the intricacies and only focus on making a lot of this easy to understand and focus on the more intuitive parts. I highly encourage people to not be intimidated and read the original papers, with a lot of them detailing the process that lead the authors to the idea - that in itself is often extremely insightful and intriguing to read.

## Central theme of ideas

About data representation in NLP: or - "vectorization" of text: In Computer Vision, this is often done through a ImageNet - trained model (a story for another time), with self-supervised learning a relatively recent art. 

For text, however, self-supervised learning has always been a high priority effort - due to the lack of _labelled_ data. You will find a lot of ideas center around the creative use and manipulation of data to include extra data into the representation and reduce information loss. I will try to highlight this factor on every paper outlined here.

## Progress on text representation

1. One-hot encoding and TF-IDF

This is among the first and most naive way to apply machine learning for text.

_One-hot Encoding_: 

Suppose you have a dictionary of 5 words `python•["I", "hello", "name", "is", "my"]`

The word "I" would be encoded as `python•[1, 0, 0, 0, 0]`

In practice, a vocabulary can go upwards to billions of words, which would easily overload storage with this method. To work around this problem, the _hashing trick_ is often used, where words would be put in a fixed number of _buckets_, and possibly have overlapping buckets - but as long as the number of buckets is sufficiently large, there's still a good estimation on word distinction.

Remarks: This is essentially a way to mathematically represent a program that would look in the text for specific mentions of certain words.

_TF-IDF_:

One problem from one-hot encoding representation is that different words are treated similarly. A lot of times words such as "is", "my", "the" can appear in all sentences, therefore would provide faulty signal (as in, you don't want your model to use the word "the" as an indicator of 2 sentences being of different intents).

One way to address this problem is to remove all words in a list of _stop words_

```python
from nltk.corpus import stopwords; print(stopwords.words('english'))
```

TF-IDF attempts to, instead, count the number of word occurrences, downplaying the more common words and putting more weight on the less common words (stronger signal). This is a step up from one-hot encoding, but is still relatively naive. We will progress extremely fast from here.

Reference example of these methods: [Classification of text documents using sparse features (from scikit-learn documentation)](https://scikit-learn.org/stable/auto_examples/text/plot_document_classification_20newsgroups.html)

2. Word2Vec

Reference: [Efficient Estimation of Word Representations in Vector Space (2013)](https://arxiv.org/abs/1301.3781)

