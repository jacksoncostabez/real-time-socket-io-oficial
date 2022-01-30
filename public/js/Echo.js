import Vue from 'vue'
import Bus from './bus'

window.Echo.channel('laravel_database_post-created').listen('PostCreated', (e) => {
    // console.log(e)
    // console.log(e.post)

    //dispara este evento para toda a aplicação, ou seja, quando um novo post for criado automaticamente ele aparece na lista de posts.
    Bus.$emit('post.created', e.post) 

    Vue.$vToastify.success(`Título do post: ${e.post.name}`, 'Novo Post')
})