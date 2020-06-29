---
title: "Tutorial: Building a full-stack Django web application - plus Kubernetes deployment"
date: 2020-06-27
tags: [web]
published: false
---

# Introduction
---

[[snippet]]
I had the recent _pleasure_ of doing a software interview exercise in developing a basic web application in specifically Python. With that, I figure since I spent the effort, might as well document it - something like this would have helped me when I started out.

While I personally do not favor Python as a web development language (because performance), Django - as a framework - is my second favorite for prototyping (next to [FeatherJS](https://feathersjs.com/)) - fastest way I know to develop a web app with all security and standards details and edge cases considered.

The full code for this project can be found here: https://github.com/luungoc2005/mobile_wallet_test_app

# The Django web application
---

For local development, let's start by creating a new environment in Pipenv/virtualenv/Anaconda, followed by installing [Django](https://www.djangoproject.com/). If you are not familiar with Django, I'd suggest taking their [tutorial](https://docs.djangoproject.com/en/3.0/intro/tutorial01/) first - which is also, to my knowledge, the easiest-to-follow and comprehensive tutorial on making a web app.

Here is where the convenience of Django shines - where you can start a semi-complete boilerplate with authentication and database connection with just simple commands choose your _technology stack_ with configuration. Compared to the hours it would take to setup plugins in other frameworks or - for heaven's sake, _code generators_ (.Net).

I started out with [changing the configuration](https://docs.djangoproject.com/en/3.0/ref/settings/#std:setting-DATABASES) to use a local Postgres database (should be the first thing you do _before_ creating migrations - migrations are one thing in Django that won't be portable between different databases).

Next I decided for this project I would use [Django REST Framework](https://www.django-rest-framework.org/) for quickly developing REST APIs, and it's also convenient for having a API browser interface so I can quickly demonstrate the APIs. With Django REST Framework, theoretically you can write a single _queryset_ and complete the entire set of CRUD REST APIs, however, most of the time you would need the various escape hatches that the framework provides - as such I don't necessarily recommend using this. One thing it does good though is that it kind of enforces a standard, which can be good for teams as far as code quality is concerned.

Django REST Framework offers a level of abstraction above Django views: Viewset. Each Viewset can represent a set of CRUD REST APIs for a resource. For example if you have an `Account` model, you can quickly create a viewset for it with all `GET`, `PUT`, `POST`, `PATCH`, `DELETE` methods, that will be shown on the web API browser.