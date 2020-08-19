---
title: "Tips for the Certified Kubernetes Application Developer (CKAD) exam (2020)"
date: 2020-08-18
tags: [web]
published: true
---

# Introduction
---

[[snippet]]
The [Cloud Native Computing Foundation](https://www.cncf.io/) (or CNCF) offers 2 Kubernetes (or k8s - as in 8 characters between k and s) exam certifications - The CKA and CKAD exams. After taking the CKAD exam, I feel like there are several personal tips I can share, in addition to the various tips by others you can easily find online.

Firstly, you might ask - what are the differences between the CKA and CKAD exams? From course syllabuses, the main difference is the CKAD is about deploying an application to a cluster, and the CKA exam is about installing k8s on bare instances, and managing/troubleshooting a running cluster. The CKA exam is longer, 3 hrs vs 2 hrs of the CKAD exam, but they are somewhat equal in difficulty level: relatively easy. For reference, it took me 1 week with ~2 hrs/day to prepare for the exam.

To me, there are 2 good reasons to take the exam: this certification is cloud agnostic, which means you are not tied to any specific details of the cloud providers' managed k8s implementation and issues - and it's absolutely free to train with a locally installed `minikube` cluster. Second, it's somewhat of a low hanging fruit - I'm already somewhat experienced with k8s, might as well get a certification for it.


# Content Outline
---

The CNCF recommends 2 courses, either [its own course](https://training.linuxfoundation.org/training/kubernetes-for-developers/) or [eDX's Introduction to Kubernetes](https://www.edx.org/course/introduction-to-kubernetes). However, I took the [A Cloud Guru/Linux Academy's course](https://linuxacademy.com/cp/modules/view/id/305) - which I can testify - follows very closely the exam content. Essentially, if you take the course and do every practice labs (3-4 times at that, to become fluent with it), passing should be easy. The course, however, don't mention at all the `kubectl run` or `kubectl create` commands with the `--dry-run` flag, which are _extremely_ useful shortcuts for the exam, but learning to hand-craft the YAML is helpful nevertheless.

Speaking of, YAML as a format definitely has a learning curve in case you are not used to it, because there can be multiple ways of representing the same data types. It definitely took me some trial and error when starting out years ago, unlike JSON which is more concrete. Even now, I usually like to picture the representation in my mind in JSON format when writing YAML.

If you are already familiar with k8s and its concepts, I reckon you can absolutely pass the exam without any training courses. You will, however, need some training to familiarize with the types of problems in the exam. [This repository](https://github.com/dgkanatsios/CKAD-exercises) is a very good resource for that. You can overqualify to pass the exam the minimal-cost way learning this alone. It also helps you immensely in familiarizing with `kubectl run` and `kubectl create`. Again I should stress: these, on their own, can outright solve or help with 2/3 of the 19 questions in the exam, and can save you a ton of repetition instead of typing out the YAML.

As for the content, I will skip the official syllabus - but, off the top of my head, the following concepts are important:

- Creating `Pod`/`Service`/`Deployment` as well as `Job`/`CronJob` (including creating multi-container pods, in particular the Ambassador pod "pattern")
- Using `LivenessProbe` and `ReadinessProbe`
- Creating and consuming `ConfigMap` and `Secret`
- Creating and consuming `Persistent Volumes`
- Debugging and monitoring usage with `kubectl get` (with `-o wide` flag), `kubectl describe`, `kubectl logs` and `kubectl top`
- Understanding how to use (no need to create) `Network Policies`
- Editting a running pod/deployment, or exporting then delete and re-deploying a running pod/deployment
- Rolling updates/rollback (with `kubectl set image`, `kubectl rollout history` and `kubectl rollout undo`)
- Nice to have: learning to verify your deployments with `kubectl exec`. Note that ssh-ing into your nodes _might_ not work, as I vaguely remember reading in the exam instructions that nested ssh was not supported - nor did I attempt it (would be nice if someone can confirm).


# Preparation Tips
---

It's best if you can get comfortable with **vim**, even if **nano** is a viable alternative. It might look intimidating, but it can be a tremendous timesaver, if you can only practice it for about a week. I also got used to editting `.vimrc` to the following as the first thing to do after connecting to a remote instance

```vimrc
set autoindent
set expandtab

" and these are more OCD than anything

set tabstop=2
set shiftwidth=2
```

Some common tasks with **vim** you can learn to start with includes saving/quitting (`:q`, `:x`), visual mode - insert mode (`i`/`esc`), navigation in visual mode (huge.. the more you're used to the better), selection, copy/cut/paste (or `[y]ank`, `[d]elete` and `[p]aste`), undo (`u`) etc. Learn the commands one by one and use it for some projects so you learn how to do things you would do elsewhere in vim.

I did not find it necessary to use `sh•source <(kubectl completion bash)` - but there's tab completion you might find convenient.

You should also get a feel for the [k8s Documentation](https://kubernetes.io/docs/home/), which you are allowed to search during the exam. In many cases, you can even get hints from the example YAML in the documentation for the exam answer. I used the documentation plenty liberally to copy-paste stuffs that cannot be created through the CLI like Persistent Volumes.

# Some gotchas
---

Remember to use `kubectl config set-cluster`, as you will be working with several clusters. The exact command will be highlighted in the question itself, but even knowing this beforehand I almost missed it, and was wondering why I could not find the deployment even with the `-A`/`--all-namespaces` flag.

The exam terminal is inside a "web app", therefore might have slightly different mappings for copy-paste depending on the platform. Be careful not to use `Ctrl+W` (normally for deleting words in the command you're typing in the terminal) - this is also the default shortcut for closing the browser tab!

The exam "web app" has a built-in Notepad that you're allowed to use, which could be useful for editting before copy-pasting or writing `kubectl` commands - though I never found the need for it.

Although I never needed to - there was an instruction about using `sudo -i` in case you run into file permission issues.

About time control, I managed to complete the 19 questions in the exam with 30 minutes to spare. Note that you _can_ join the exam 15 minutes prior to the start time also - so contrary to a lot of other posts I read, there _is_ plenty of time to search the documentation and revising answers. The latter questions seemed harder (more details to incorporate) - it took me the first hour to breeze through the first 15 questions and the rest of the time for the 4 last and revision.

For my attempt, I got a score of 84%, and it was stated 66% was the passing grade - so I assume this might change every time according to the distribution of scores, but it should hover around that range. I somewhat expected a higher score since I was confident I could easily breeze through the answers, but there were probably details I missed.

Thanks for reading and good luck!