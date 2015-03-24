---
layout: post
title:  "ModularizaçãoP0rraCarai!"
date:   2015-03-24 02:19:47
categories: Sushi Humano
---



Faz um tempo que empaquei na migração de Banco de Dados no Sails.js, mas só depois de estudar essa parte do MVC consegui peceber a praticidade que é essa poha!

{% highlight html %}
$ npm install sails-mysql
{% endhighlight %}

#Configurando o mysql

config/connections.js
{% highlight html %}
module.exports.connections = {
  mysql: {
    module    : 'sails-mysql',
    host      : 'localhost',
    port      : 3306,
    user      : 'username',
    password  : 'password',
    database  : 'MySQL Database Name'
  }
};
{% endhighlight %}

#Definindo conexões no model

config/models.js
{% highlight html %}
module.exports.models = {
  connection: 'mysql'
};	
{% endhighlight %}


Fora o trampo no mysql! criação de usuário e database

##M0dularização

DEpois de finalmente conseguiur estabelecer e sincronizar um banco de dados, fui pesquisar como ele funcionava dessa forma simples!

Na criação de uma api qualquer no sails ele gera dois arquivos (controller e Model) no model.js setamos os atributos (CRUD) que vão para o seu banco de dados através da modularização onde nesse MVC é feita pelo Waterline 

<a href="https://github.com/balderdashy/waterline">https://github.com/balderdashy/waterline</a>
![waterline](http://i.imgur.com/3Xqh6Mz.png)

"An adapter-based ORM for Node.js with support for mysql, mongo, postgres, and more."


Existem outras ferramentas parecidas como Hibernate e Mongoose <a href="http://nomadev.com.br/modulariza%C3%A7%C3%A3o-a-s%C3%A9rie-mongoose/">(artigo foda do @osuissa sobre Moongose)</a> que também são novas, mas com um doc extenso na net! Modularização é essencial para ter um workflow rapido e prático, pois elimina quase todas as tarefas de uma modelagem de banco de dados, criação de tabelas e etc....

##Workbench JAMAIS!!

![crazy dolphin](https://pendletonpanther.files.wordpress.com/2010/02/dolphin-med.jpg)	