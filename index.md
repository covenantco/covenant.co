---
layout: default
title: "Covenant"
---

<div class="max-w-3xl mx-auto">
  <header class="flex items-center pb-4 sm:pb-8 border-solid border-b border-blue-400">
    <svg class="w-8 sm:w-12 fill-white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 252 171.1" xml:space="preserve">
      <path d="M85.5,10c41.7,0,75.5,33.9,75.5,75.5s-33.9,75.5-75.5,75.5S10,127.2,10,85.5S43.9,10,85.5,10 M85.5,0
               C38.3,0,0,38.3,0,85.5s38.3,85.5,85.5,85.5s85.5-38.3,85.5-85.5S132.8,0,85.5,0L85.5,0z"/>
      <path d="M166.5,10c41.7,0,75.5,33.9,75.5,75.5s-33.9,75.5-75.5,75.5s-75.5-33.9-75.5-75.5S124.8,10,166.5,10 M166.5,0
               c-47.2,0-85.5,38.3-85.5,85.5s38.3,85.5,85.5,85.5S252,132.8,252,85.5S213.7,0,166.5,0L166.5,0z"/>
      <path d="M126,10c41.7,0,75.5,33.9,75.5,75.5s-33.9,75.5-75.5,75.5s-75.5-33.9-75.5-75.5S84.4,10,126,10 M126,0
               C78.8,0,40.5,38.3,40.5,85.5s38.3,85.5,85.5,85.5s85.5-38.3,85.5-85.5S173.2,0,126,0L126,0z"/>
    </svg>
    <h2 class="font-dm-serif text-3xl sm:text-4xl ml-3">
      Covenant
    </h2>
    <a class="bg-blue-800 p-2 text-sm sm:text-base ml-auto hover:bg-blue-900 hidden sm:inline" href="mailto:contact@covenant.co">
      Learn more
    </a>
  </header>
  <h1 class="pt-8 sm:pt-16 font-oswald text-5xl sm:text-8xl lg:text-9xl tracking-tight text-green-200 uppercase relative">
    {{  site.data.landing.headline }}
  </h1>
  <h3 class="text-xl leading-tight sm:text-2xl mt-4 sm:mt-8">
    {{ site.data.landing.subhead  }}
  </h3>
  <div class="sm:grid grid-cols-2 gap-x-16">
    {% for block in site.data.landing.blocks %}
      <div class="mt-6">
        <h3 class="font-semibold text-xl">{{ block.title }}</h3>
        <div class="text-blue-200 leading-tight sm:mt-1">{{ block.body }}</div>
      </div>
    {% endfor %}
  </div>
  <div class="font-oswald text-3xl sm:text-5xl text-blue-100 pt-8 sm:pt-16 mt-8 sm:mt-16 border-solid border-t border-blue-400">
    {{ site.data.landing.proof  }}
  </div>
  <a class="block text-1xl sm:text-2xl mt-8 sm:mt-16 bg-blue-800 py-8 sm:py-16 text-center hover:bg-blue-900 leading-tight" href="mailto:contact@covenant.co">
    Learn how Covenant can<br class="sm:hidden"> accelerate your sales.
  </a>
  <footer class="text-blue-400 text-sm mt-16">
    Good agreements should be easy to reach. <div class="inline-block">© 2022</div>
  </footer>
</div>
