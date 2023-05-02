<script>
import utils from '@/utils';
import {Form, Field, ErrorMessage} from 'vee-validate';
import * as yup from 'yup';

export default {
  data() {
    return {
      validationSchema: yup.object({
        account: yup.string().required().label('Account name'),
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
      console.log(values);
      utils.userLoginUtils.login(values);
    },
  },
};
</script>

<template>
  <Form @submit="login" :validation-schema="validationSchema">
    <div class="login-wrapper">
      <div>
        <div>
          <h2 mt-3>Sign In</h2>
          <div>
            <Field
                name="account"
                as="input"
                type="text"
                class="input-account"
                label="Account name"
                placeholder="Input your account email"
            />
            <ErrorMessage
                name="account"
                as="div"
            />
            <br/>
            <Field
                name="password"
                as="input"
                type="password"
                class="input-password"
                label="Password"
                placeholder="Input your password"
            />
            <ErrorMessage
                name="password"
                as="div"
            />
          </div>
          <button>Login</button>
          <div>
            <i></i>
            <i></i>
          </div>
        </div>
        <div>
          <!-- <BingLink>Home</BingLink>
          <BingLink>Registration</BingLink>
          <BingLink>Forget password</BingLink>
          <BingLink>Service</BingLink> -->
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
// form {
//   @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5 md:p-0;
// }

.login-wrapper {
  background-color: #4D1979;
  color: white;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


h2 {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 40px;
}
button {
  background-color: rgb(179, 179, 179);
}
.input-account {
  width: 200px;
}

.input-password {
  width: 200px;
}
</style>
