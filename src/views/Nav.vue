<template>
  <header class="header">
    <div class="header__logo">Лого</div>
    <div class="header__search">Поиск</div>
    <div class="header__nav">
      <router-link class="header__link" to="/">Главная</router-link>
      <router-link class="header__link" to="/about">Автор</router-link>
      <router-link class="header__link" to="/about">Заказать</router-link>
      <router-link class="header__link" to="/about">Контакты</router-link>
      <router-link class="header__link" to="/about">Помощь</router-link>
    </div>
    <div class="header__langs">rus ukr eng</div>
    <div class="header__basket">Корзина</div>
  </header>
</template>

<style lang="sass">
@import "../styles/index.scss"

.header
  background: #ddd
  display: flex
  justify-content: flex-start
  align-items: center
  flex-wrap: nowrap
  height: 40px

  > *
    height: 100%
    display: flex
    align-items: center
    justify-content: center

.header__logo
  width: 200px
  border: solid red 1px

.header__search
  width: 300px
  border: solid green 1px

.header__nav
  flex-grow: 2
  border: solid blue 1px
  justify-content: center

.header__link
  display: flex
  flex-grow: 2
  justify-content: center
  align-items: center
  height: 100%
  padding: 0 20px
  border: solid red 1px

.header__langs
  width: 130px

.header__basket
  width: 50px
</style>
