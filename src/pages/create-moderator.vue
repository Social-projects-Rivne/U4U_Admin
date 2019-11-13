<template>
 <app-layout>
  <div class="create-moderators">
   <ValidationProvider class="inp-wrapper"  rules="required|min:3" v-slot="{ errors }">
    <input
            v-model="name"
            placeholder="name"
            type="text" />
    <span>{{ errors[0] }}</span>
   </ValidationProvider>
   <ValidationProvider class="inp-wrapper"  rules="required|min:3" v-slot="{ errors }">
    <input
            v-model="surname"
            placeholder="surname"
            type="text" />
    <span>{{ errors[0] }}</span>
   </ValidationProvider>
   <ValidationProvider class="inp-wrapper"  rules="required|min:3|isNickNameUnique" v-slot="{ errors }">
    <input
            v-model="nickname"
            placeholder="Nick name"
            type="text" />
    <span>{{ errors[0] }}</span>
   </ValidationProvider>
   <ValidationProvider class="inp-wrapper"  rules="required|date" v-slot="{ errors }">
    <input
            v-model="birth_date"
            placeholder="Birth date"
            type="text" />
    <span>{{ errors[0] }}</span>
   </ValidationProvider>
   <ValidationProvider class="inp-wrapper"  rules="required|email|isEmailUnique" v-slot="{ errors }">
    <input
            v-model="email"
            placeholder="E-mail"
            type="text" />
    <span>{{ errors[0] }}</span>
   </ValidationProvider>
    <ValidationProvider class="inp-wrapper"  rules="required|min:4" v-slot="{ errors }">
     <input
             v-model="password"
             placeholder="password"
             type="text" />
     <span>{{ errors[0] }}</span>
   </ValidationProvider>
  </div>
  <input type="file" id="file" ref="myFiles" @change="previewFiles">
  <button @click="submit" class="submit">Create</button>
 </app-layout>
</template>

<script>
 import AppLayout from '../components/dashboard/app-layout';
 import { createModerator } from "../services/api";

 export default {
        name: "create-moderator",

        data: () => ({
            inputs: [
                {
                    name: 'name',
                    rules: 'required',
                    placeholder: 'Name',
                    type: 'text',
                },
                {
                    name: 'surname',
                    rules: '',
                    placeholder: 'Surname',
                    type: 'text',
                },
                {
                    name: 'nickname',
                    rules: '',
                    placeholder: 'Nick name',
                    type: 'text',
                },
                {
                    name: 'email',
                    rules: '',
                    placeholder: 'E-mail',
                    type: 'email',
                },
                {
                    name: 'password',
                    rules: '',
                    placeholder: 'Password',
                    type: 'password',
                },
                {
                    name: 'birth_date',
                    rules: '',
                    placeholder: 'Date of birth',
                    type: 'text',
                }
            ],
            file: '',
            surname: '',
            name: '',
            nickname: '',
            birth_date: '',
            email: '',
            password: '',
            avatar: ''
        }),

        methods: {
         previewFiles() {
             this.file = this.$refs.myFiles.files[0]
         },
         submit() {
             this.$validator.validateAll().then(() => {
                 console.log(1);
             }).catch(() => {
                 console.log(2);
             });
         },
            handleChange(e) {
                const name = e.target.name;
                const value = e.target.value;
                console.log(name);
                this[name] = value;
            }
        },

     computed: {

     },

        components: {
            AppLayout
        }
    }
</script>

<style lang="scss" scoped>
 .create-moderators {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
   input {
    margin: 1rem;
   }
 }

 .submit {
  display: block;
 }

 .inp-wrapper {
  display: flex;
  flex-direction: column;
 }
</style>