---
title: A history of progress on text representation in NLP (Part 2 - Sentence-level representation)
date: 2020-05-29
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

Using word vectors, the bag of words model is either the sum or the average of word vectors - not necessarily one-hot encoded vectors, but often the pre-trained Word2Vec, GloVe or FastText vectors I mentioned in [part 1](/blog/2020-05-27-brief-history-of-nlp.md).

As immediately evident, this method disregards contextual information and word ordering. Used for sentence/document classification, it would be a glorified checking substrings algorithm.

## SIF and FastText

One attempt to improve upon this method is to use a weighted average instead. This can be considered a direct improvement over removing stop words - we can use TF-IDF weighting scheme to determine the weights of word vectors, or a improved version - _smooth inverse frequency_ (SIF). This method is implemented in _A simple but tough-to-beat baseline for sentence embeddings_ - which actually outperforms several more complex models that actually takes into account word ordering (*on select tasks) - some of which we will explore later on in this article.

- Implementation: [PrincetonML /
SIF (Github)](https://github.com/PrincetonML/SIF)


If you tried to _google_ for FastText, you might also have seen the paper _Bag of Tricks for Efficient Text Classification_ . This paper actually employs a similar method to vanilla bag of words - to take a (normal) average of word vectors. The difference here is it also encodes n-grams of words as separate tokens, which gives it a form of word order information.

For example, the following sentence:

`The quick brown fox jumps`

Can be broken into these tokens (assuming a 2-gram model):

`<the>, <quick>, <brown>, <fox>, <jumps>, <the quick>, <quick brown>, <brown fox>, <fox jumps>`

Then encoded and averaged into a sentence vector.

- Tutorial: [Text classification using FastText](https://fasttext.cc/docs/en/supervised-tutorial.html)

- An approximate implementation that can give a good understanding on how FastText works lie in the [Keras examples](https://keras.io/examples/imdb_fasttext/).

- Pytorch also has an implementation of this method in its [examples documentation](https://pytorch.org/tutorials/beginner/text_sentiment_ngrams_tutorial.html)


A honorable mention: this method bears homeage to _Convolutional Neural Networks for Sentence Classification_, where the use of convolutional network bears resemblance to this method of taking n-grams into account. Though empirically, this method of using CNNs might not necessarily outperform the various Bag-of-Words variations above, and is more computationally expensive.

References:
- [A simple but tough-to-beat baseline for sentence embeddings](https://openreview.net/pdf?id=SyK00v5xx)
- [Bag of Tricks for Efficient Text Classification](https://arxiv.org/pdf/1607.01759.pdf)
- [Convolutional Neural Networks for Sentence Classification](https://www.aclweb.org/anthology/D14-1181.pdf)

# 2. Skip-Thought Vectors

Note that by this time - People are not longer strangers to using recurrent networks (GRU/LSTM) for machine translation. This is, to my knowledge, the first attempt on applying Machine Translation to self-supervised training. The paper also introduces _BookCorpus_, which is a dataset that is often used to this day in combination with Wikipedia for training language models.

The training objective of Skip-Thought Vectors is to generate (or "translate") the previous and following sentence for any given sentence (similar to Word2Vec's skip-gram setup), as illustrated below:

![Skip-Thought Vectors training objective](/assets/brief-history-of-nlp-p2-skip-thought-objective.png)

Side note: This paper also introduces an _interesting_ technique for handling unseen words: It trains a linear mapping between Word2Vec and its encoder's embeddings layer for shared words. After that, unseen words can be taken from Word2Vec and mapped to the model's embedding space. This does seem to work decently from the examples given by the paper.

All in all, the 2 most important contributions of this work is the BookCorpus dataset and it paved the way for sentence embeddings by proving that it can outperform existing techniques.

