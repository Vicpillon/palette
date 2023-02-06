import React, { useState } from "react";

function SignUp () {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");


    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    };
    
    
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    };

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    };

    
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value);
    };
    
    const onPhoneNumberHandler = (e) => {
        setPhoneNumber(e.currentTarget.value);
    };

    const onAdressHandler = (e) => {
        setAddress(e.currentTarget.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            return alert ("비밀번호가 틀립니다. 다시 확인해주세요.");
        }
    }

    const onChangeEmail = (e) => {

        const currentEmail = e.currentTarget.value;
        setEmail(currentEmail);
        const emailRegExp = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

        if(!emailRegExp . test(currentEmail)){
            return alert("이메일 형식이 잘못되었습니다.");
            setEmail(false);
        }else{
            return alert("사용가능한 이메일 입니다.");
            setEmail(true);
        }
    };

    const onChangeName = (e) => {

        const currentName = e.currentTarget.value;
        setName(currentName);
        
        if(currentName.length < 2 || currentName.length > 10){
            return alert("이름은 2~10자 이내로 입력해주세요.");
            setName(false);
        }else{
            return alert("사용가능한 이름 입니다.");
            setName(true);
        }
    };

    const onChangePassword = (e) => {

        const currentPassword = e.currentTarget.value;
        setPassword(currentPassword);
        
        const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if(!passwordRegExp.test(currentPassword)){
            return alert("숫자,영문자,특수문자 조합으로 입력해주세요.")
            setPassword(false);
        }else{
            return alert("사용가능한 비밀번호 입니다.");
            setPassword(true);
        }    
    };

    const onChangeConfirmPassword = (e) => {

        const currentConfirmPassword = e.currentTarget.value;
        setConfirmPassword(currentConfirmPassword);
        if(setPassword!== currentConfirmPassword){
            return alert("비밀번호가 틀립니다. 다시 확인해주세요.")
            setConfirmPassword(false);
        }else{
            return alert("사용가능한 비밀번호 입니다.")
            setConfirmPassword(true);
        }
    };

    const onChangePhoneNumber = (getNumber) => {
        const currentPhoneNumber = getNumber;
        setPhoneNumber(currentPhoneNumber);
        const phoneNumberRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        if(!phoneNumber.test(currentPhoneNumber)){
            return alert("휴대폰 번호 형식을 확인해주세요.");
            setPhoneNumber(false);
        }else{
            return alert("사용가능한 휴대폰 번호입니다.");
            setPhoneNumber(true);
        }
    };


    return (
        <div class="SignUp">
          <form>
              <div><input type="text" placeholder="이름" value={name} onChange={onNameHandler} class="loginregister__input"/></div>
              <div><input type="email" placeholder="이메일" value={email} onChange={onEmailHandler} class="loginregister__input"/></div>
              <div><input type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} class="loginregister__input"/></div>
              <div><input type="confirmPassword" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} class="loginregister__input"/></div>
              <div><input type="phoneNumber" placeholder="휴대폰번호" value={phoneNumber} onChange={onPhoneNumberHandler} class="loginregister__input"/></div>
              <div><input type="address" placeholder="주소" value={address} onChange={onAdressHandler} class="loginregister__input"/></div>

              <div><button type="submit" onSubmit={onSubmitHandler} class="signUp_button">계정 생성하기</button></div>
          </form>
        </div>
    );
}
export default SignUp;



