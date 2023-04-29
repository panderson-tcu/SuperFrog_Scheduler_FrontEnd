<script>
// import BingInput from '../components/form/BingInput.vue';
// import BingButton from '../components/form/BingButton.vue';
// import BingLink from '../components/form/BingLink.vue';
import utils from '@/utils';
import {Form, Field, ErrorMessage} from 'vee-validate';
import * as yup from 'yup';

export default {
  data() {
    return {
      validationSchema: yup.object({
        account: yup.string().required().email().label('Account name'),
        password: yup.string().required().min(3).label('Password'),
      }),
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    login(values) {
      utils.userLoginUtils.login(values);
    },
  },
};
</script>

<template>
  <Form @submit="login" :validation-schema="validationSchema">
    <div
      class="w-[720px] translate-y-32 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
    >
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg" mt-3>User login</h2>
          <div class="mt-8">
            <Field
                name="account"
                as="input"
                type="text"
                class="input-account"
                label="Account name"
                placeholder="Input your account email"
                v-model="loginInfo.account"
            />
            <ErrorMessage
                name="account"
                as="div"
                class="bing-error"
            />
            <Field
                name="password"
                as="input"
                type="password"
                class="input-password"
                label="Password"
                placeholder="Input your password"
                v-model="loginInfo.password"
            />
            <ErrorMessage
                name="password"
                as="div"
                class="bing-error"
            />
          </div>
          <BingButton class="mt-5">Login</BingButton>
          <div class="flex justify-center mt-3">
            <i class="fab fa-facebook rounded-full p-1 cursor-pointer"></i>
            <i class="fab fa-google rounded-full p-1 cursor-pointer"></i>
          </div>
        </div>
        <div class="flex gap-2 justify-center mt-5">
          <BingLink>Home</BingLink>
          <BingLink>Registration</BingLink>
          <BingLink>Forget password</BingLink>
          <BingLink>Service</BingLink>
        </div>
      </div>
      <div class="hidden md:block relative">
        <img
            src="/images/login.jpg"
            alt=""
            class="absolute h-full w-full object-cover"
        />
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
form {
  @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5 md:p-0;
}
</style>
