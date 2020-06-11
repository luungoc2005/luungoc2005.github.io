---
title: A history of progress on text representation in NLP (Part 3 - Transformer models)
date: 2020-06-15
tags: [ai]
published: true
---

# Introduction
---

[[snippet]]
|This part is, in fact, a continuation of the previous part - still about sentence-level representations. However, I will discuss on what has been the state-of-the-art architecture for the last few years - Transformers.

Transformers are a class of sequential models based on the attention mechanism. In practice, they would stand in place of the LSTM layers that was the point of focus in [part 2](/2020-06-06-brief-history-of-nlp-p2).

# Transformer models
---

# 1. Attention Is All You Need

Prior to this, _attention mechanism_ has been a major breakthrough for machine translation (which are still RNN-based). One of the more prominent papers on Attention mechanism for machine translation would be [Effective Approaches to Attention-based Neural Machine Translation](https://arxiv.org/pdf/1508.04025). As such, there were also various attempts to apply attention mechanism to RNN networks to various degrees of success, such as [A Hierarchical Neural Autoencoder for Paragraphs and Documents](https://arxiv.org/pdf/1506.01057v2.pdf).

However, _Attention is all you need_ is the paper that first introduces the _Transformer_ architecture - this was considered the most exciting breakthrough for NLP since ages. As its name would indicate, it relies on Attention mechanism at its core, but the application is vastly different from prior literature. To avoid repeating, I would suggest reading [The Illustrated Transformer](http://jalammar.github.io/illustrated-transformer/), an excellent explanation on how Transformers work. In summary, Transformers are theoretically more computationally efficient, and does not suffer from gradient vanishing - which was RNN networks' Achilles heel. It can almost be used as a drop-in replacement for RNN networks, and would bring comparable-to-greater results.

References:

- [Effective Approaches to Attention-based Neural Machine Translation](https://arxiv.org/pdf/1508.04025)
- [A Hierarchical Neural Autoencoder for Paragraphs and Documents](https://arxiv.org/pdf/1506.01057v2.pdf)
- [Attention Is All You Need](https://arxiv.org/pdf/1706.03762)
- [The Illustrated Transformer](http://jalammar.github.io/illustrated-transformer/)

# 2. GPT

GPT (or GPT-1) by OpenAI was as straightforward as it gets. It directly applies the new Transformer architecture to a language modeling (predicting the next word) problem. One thing it brought to the table was the standard procedure on applying the Transformer to downstream tasks, which bears some differences when compared to LSTM models (e.g for question answering and textual entailment, you would concatenate the 2 sentences, separated by a special token, instead of running the 2 sentences through the single encoder separately). Nevertheless, it quickly became state-of-the-art and dethrones ULMFiT, signaling Transformers becoming the new norm. It also raised the bars on _compute requirement_, for that matter, as ULMFiT at the time still had the benefit of being massively faster to train.

_Side note:_ Although OpenAI has since released GPT-2 and GPT-3, where GPT-2 actually is very prominent model and has a lot of applications, I won't mention them here because they no longer focus on the purpose of textual representation, but only emphasizes on text _generation_ instead. Meanwhile, GPT-3 is... in short, a massively scaled up version of GPT-2, that cannot be run on consumer hardware.

References:

- [Improving Language
Understanding with
Unsupervised Learning](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf)

# 3. BERT

With GPT being state of the art, it still had one major weakness that resembles RNN networks: its language modeling training objective gives it the unidirectional information handicap. Basically, every timestep would only be able to take the information from the words before it - done through attention masking. BERT introduced a new objective that makes it bi-directional, which actually resembles a _denoising autoencoder_: The task is essentially recovering damaged information from a given input sentence. The input sentence would have its words masked out (like a cloze test), and some of its words swapped out randomly. This looks a bit like this:

|Input|Target|
|:-:|:-:|
|`The [MASK] brown fox jump`|`- quick - - - jumps`|

Note that the target does not need to recover exactly the input sentence, as the model would just learn to copy from the input - which would be redundant.

As can be seen - this training objective would help the model learn grammatical structures and syntax in a manner that can be said to be a generalization of Word2Vec skip-gram or CBOW methods: by collocations of words.

BERT - at the time of release - still uses sub-word segmentation, which means this masking sometimes result in word segments being masked out - making it easy to recover. This was later addressed by the authors with an update called "whole word masking". There was also _Span BERT_ which takes it to another level by masking out 3 consecutive words, which can lead to improved performance on span-related task, specifically question answering (predicting the span of the answer in the input paragraph).

In addition to this, the authors also introduced a next sentence prediction task to prime the model for multi-sequence tasks such as question answering and textual entailment. After the initial training, the 2nd finetuning task is to have a sequence of 2 sentences. These 2 sentences can either be taken directly from the dataset to be 2 continuous sentences, or the 2nd sentence can be randomized. The task to classify whether the 2nd sentence is randomized or taken from the same context heavily resembles a textual entailment task, only this does not require a labelled dataset, hence the entire procedure remains unsupervised (or semi-supervised to be more accurate).

|First Sentence|Second Sentence|Target|
|:-:|:-:|:-:|
|`I've built up my savings.`|`I can now travel the world with it`|`True`|
|`I've built up my savings.`|`I like tacos.`|`False`|

Hold on to the next sentence prediction task, however, as RoBERTa, a model later released by Facebook, proved that the task can actually hurt performance. RoBERTa merely made slight alterations to the training parameters to optimize BERT, and actually resulted in better performance than even XLNet - which uses permutation language modeling to supposedly remedies the limitations from BERT's training task. Most importantly, RoBERTa proved BERT's easier-to-understand and implement task was adequate for reaching state-of-the-art results, and XLNet - which would theoretically be an improvement - actually could not improve upon BERT's training task emperically.

This next sentence prediction task was later ammended by ALBERT, which, in short is BERT but with weight tying and embedding factorization (this in itself can be implemented by a ~10-line code change in BERT). The authors replaced the next sentence prediction task with a sentence _order_ prediction task and demonstrated this can improve performance on downstream tasks. This is how it looks like:

|First Sentence|Second Sentence|Target|
|:-:|:-:|:-:|
|`I've built up my savings.`|`I can now travel the world with it`|`True`|
|`I can now travel the world with it`|`I've built up my savings.`|`False`|

The bigger contribution of ALBERT, however, was that - thanks to the memory savings from weight-tying and embedding factorization, that despite this still hurting downstream performance, it facilitated running _even bigger_ models, which ultimately brings additional performance. ALBERT became the state-of-the-art model that can be run on consumer GPU, to the time of writing this blog.

On BERT itself, because of its heavy computational requirements that makes it unsound for production settings, quickly gave rise to distillation techniques - in which a smaller Transformer model (the student) would learn to replicate the bigger model (the teacher)'s results. Thanks to these efforts, the distilled variants of BERT can be used in production and is in fact rolled out on both Google and Bing. There's also efforts on hastening BERT training, namely LAMB optimizer to train BERT on larger batch sizes, and ELECTRA - a highly recommended read for its interesting idea, albeit with limited application.

BERT also gave rise to _Bertology_, due to its attention mechanism making it easy to visualize inspect what the model _learns_. Turns out, BERT is heavily overparameterized, which theoretically means BERT can be more optimized, and that there are a lot of attention patterns in BERT that are not optimized. There are attempts on using this knowledge to optimize BERT, whether it be training time or improve downstream performance, but so far there has not been any breakthroughs on the front.

References

- [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://arxiv.org/pdf/1810.04805)
- [SpanBERT: Improving Pre-training by Representing and Predicting Spans](https://arxiv.org/pdf/1907.10529)
- [XLNet: Generalized Autoregressive Pretraining for Language Understanding](https://arxiv.org/pdf/1906.08237)
- [RoBERTa: A Robustly Optimized BERT Pretraining Approach](https://arxiv.org/pdf/1907.11692)
- [ALBERT: A Lite BERT for Self-supervised Learning of Language Representations](https://arxiv.org/pdf/1909.11942)
- [ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators](https://arxiv.org/pdf/2003.10555)

# Looking forward
---

## On Transformers

Transformers themselves are not the silver bullet: there are a lot of remaining issues with them, with teams racing to address each issues, but so far without any major breakthroughs:

Transformers are hard to train: training transformers are usually more unstable than training RNN networks. For RNNs you usually can just use the default `Adam(lr=1e-3)` - or the range of useable learning rates and batch sizes are actually very flexible - and it would converge to reasonable performance. Not so for Transformers - which usually require a _learning rate schedule_, which is often a linear warmup. Attempts to tackle this include new optimizers, most prominently the Adam-based RAdam and LAMB (which is optimized for training on huge batch sizes).

Transformers are slow and has a hard cap on sequence length - while RNNs are theoretically limitless (if you don't count in gradient vanishing which in the end still makes Transformers superior). The biggest problem with Transformers so far is that the self-attention mechanism is _O(n<sup>2</sup>)_ time and space where n is the sequence length. The following papers are some of the most prominent in trying to tackle these issues, often by using sparsity or approximations of the self-attention, but yet to a satisfactory degree of success:

- [Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context](https://arxiv.org/pdf/1901.02860)
- [Adaptive Attention Span in Transformers](https://arxiv.org/pdf/1905.07799)
- [Compressive Transformers for Long-Range Sequence Modelling](https://openreview.net/pdf?id=SylKikSYDH)
- [Reformer: The Efficient Transformer](https://arxiv.org/pdf/2001.04451)
- [Linformer: Self-Attention with Linear Complexity](https://arxiv.org/pdf/2006.04768)

## On RNNs

There are still ongoing efforts on improving RNNs, mostly closing the gap between LSTM and Transformers performance. These still have not managed to make LSTM networks catch up to Transformers, but some can massively improve LSTM networks - which are still being used extensively outside of the NLP world, most prominently for Reinforcement Learning.

- [Ordered Neurons: Integrating Tree Structures into Recurrent Neural Networks](https://arxiv.org/pdf/1810.09536)
- [Layer Normalization](https://arxiv.org/pdf/1607.06450.pdf) - _(also a very important building block for Transformers)_
- [Mogrifier LSTM](https://arxiv.org/pdf/1909.01792)