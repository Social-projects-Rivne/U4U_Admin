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
  <p v-if="err">something has gone terribly wrong</p>
  <p v-if="created">Moderator {{ name }} has been created successfully</p>
  <div class="submit-buttons">
   <input type="file" id="file" ref="myFiles" @change="processFile">
   <button @click="submit" class="submit">Create</button>
  </div>
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
            created: false,
            err: false,
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

            processFile(event) {
                this.avatar = event.target.files[0]
            },

         previewFiles() {
             this.file = this.$refs.myFiles.files[0]
         },
         submit() {
             const formData = new FormData();
             formData.append('avatar',this.avatar);

             formData.append('name', this.name);
             formData.append('surname', this.surname);
             formData.append('nickname', this.nickname);
             formData.append('email', this.email);
             formData.append('password', this.password);
             formData.append('birth_date', this.birth_date);


             createModerator(formData).then(res => {
                     this.created = true;
                 }).catch(err => {
                     this.err = true;
                 })
         },
            handleChange(e) {
                const name = e.target.name;
                const value = e.target.value;
                this[name] = value;
                this.err = false;
                this.created = false;
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

 .submit-buttons {
  display: flex;
  justify-content: center;
 }
</style>