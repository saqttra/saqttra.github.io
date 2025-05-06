// Copyright (c) 2025 saqttra. All rights reserved.

export default function About(){
  return `
  <article class='m-4 mt-0 h-auto'>
    <div class='flex items-center'>
      <img class='w-8 h-8 rounded-md mr-2'
           src='https://avatars.githubusercontent.com/u/113034629?v=4'
           alt='nil'>
      <h1 class='text-2xl font-extrabold border-l-[0.5px] border-black/50 pl-2'>
        saqttra
      </h1>
    </div>
    <p class='mt-4 md:w-1/3 text-sm'>
      I'm a computer scientist interested in the implementation and research
      of compilers, programming languages, frontend technologies, and internal
      developer tooling. Outside of programming, I enjoy reading about
      philosophy/theology, cooking, and playing LeBlanc support.
    </p>

    <p class='mt-7 md:w-1/3 text-sm'>
      One could argue that it's ironic to be interested in frontend technologies
      while having such an austere personal website. That choice came after
      stumbling upon <a class='moschino-link 'href='https://shud.in/'>Shu Ding's
      site</a> &mdash; and realizing that pages like <a class='moschino-link'
      href='https://www.berkshirehathaway.com/'>Berkshire Hathaway's</a> or <a
      class='moschino-link' href='https://motherfuckingwebsite.com/'>motherfuckingwebsite.com</a>
      are perfect examples of minimalism done right, without being annoyingly
      pretentious.
    </p>

    <p class='mt-7 md:w-1/3 text-sm'>
      You can find me on <a class='moschino-link' href='https://github.com/saqttra'>
      GitHub</a>, and <a class='moschino-link' href='https://x.com/saqttra'>X/Twitter</a>.
      Though, considering how disturbingly dedicated and terminally online some
      people can be, there's a fair chance you'll figure out who I am elsewhere
      too.
    </p>
  </article>
  `
}
