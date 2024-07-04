import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login-btn";

export default function Login() {
  return (
    <div className="flex flex-col gap-5 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="email"
          placeholder="write Email"
          required
          errors={[]}
        />
        <FormInput
          type="password"
          placeholder="password"
          required
          errors={[]}
        />

        <FormBtn loading={false} text="Create Account" />
      </form>

      <SocialLogin />
    </div>
  );
}
