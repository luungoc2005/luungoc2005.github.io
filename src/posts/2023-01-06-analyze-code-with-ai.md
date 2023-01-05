---
title: "Analyze my code with AI (Salesforce Codegen)"
date: 2023-01-06
tags: [ai]
published: true
---

[[snippet]]
|As a fun weekend side project that I haven't done in a while - I decided to do a little experiment with Salesforce Codegen model.

# Introduction

Codegen is a transformer-based NLP model that predicts code based on the previous context. There are 2 types of codegen model - python only (mono) and all languages (multi).

You can try it out easily since it's on [Huggingface](https://huggingface.co/docs/transformers/model_doc/codegen). But this use case is too obvious. Someone probably started writing a VSCode plugin for it already. I wanted to try something different, to use it to check for errors in my code.

The theory is since the model is supposed to predict the following text, I can use it to check if my code follows the models' predictions. If there's a very low chance the model predicts the code, it's probably wrong (or at least unusual) in some way.

All the code is available on my Github: https://github.com/luungoc2005/code_analyser

# How to use it

1. Git clone and install the required packages

```bash
git clone https://github.com/luungoc2005/code_analyser
cd code_analyser
pip install -r requirements.txt
```

2. Run main.py on your file

```bash
python main.py path_to_your_file.js
```

By default this should output an out.html file that looks like ![this](/assets/code-analyzer-output.png)

When you hover on each _token_, it will show a list of top 5 candidate tokens for that position as well as the probability.

3. Does it work?

Simply, no

It seems this really likes to underestimate some types of valid tokens, like variable naming, which I assume is due to softmax function. This happens to both the mono and multi language model. It can catch a few things, like keywords or indentation in python, but then those are probably better off being caught with a linter.

But as always, there are things to learn for every project. Here are the few lessons I managed to pick up:
- Transformers don't really work on Apple Silicon (or MPS in pytorch), at least not at the time of writing. It manages to run, but the numerical inaccuracies add up causing the final result to be vastly different. On the other hand, it's not a lot slower on CPU - but still too slow to be very practical overall. Talking about ~20 minutes to run on a small file.
- I was probably supposed to use the `past` parameter to the predict function - which is supposed to speed up the process by reusing the previous hidden states - but I couldn't get it to work. Hence I tried the next best thing - batching it up. It is probably more resource efficient to use the `past` parameters though, so if any reader knows, please let me know via the comments or drop me an email.
- torchjit also isn't a big speed up as I imagined it would be, but it's quite easy to do and is a step towards making a mobile app for a model.