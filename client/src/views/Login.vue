<template>
<form>
    <div class="field">
    <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email">
        <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
        </span>
    </p>
    </div>
    <div class="field">
    <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password">
        <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
        </span>
    </p>
    </div>
    <div class="field">
    <p class="control">
        <button class="button is-success" @click.prevent="login">
        Login
        </button>
    </p>
    </div>
</form>
</template>

<script>
import session from "@/models/session";

export default {
    methods: {
        login(){
            session.user = {
                name: 'Cade Cabrera',
                handle: 'cabreracade',
                profile: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21370920_10209622095900406_1558557478066919662_n.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=SACDV3bx78gAX96KbJb&_nc_ht=scontent-lga3-1.xx&oh=47b81e9ad653b26796e4b0f8c5ccbb91&oe=5FACA43C'
            }
            session.addNotification('Yay! You logged in');
            this.$router.push('feed');
        }
    }
}
</script>

<style>
    form{
        margin-top: 15px;
    }
</style>