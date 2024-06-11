import "../components/css/JoinForm.css"
import Input from "./Input"

function JoinForm() {
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <h1 className="formTitle">회원가입</h1>
            <Input
                title="이메일"
                type="email"
                placeholder="이메일을 입력하세요."
            />
            <Input
                title="비밀번호"
                type="password"
                placeholder="비밀번호를 입력하세요."
            />
            <Input
                title="비밀번호 확인"
                type="password"
                placeholder="비밀번호를 한 번 더 입력하세요."
            />
            <Input
                title="닉네임"
                type="text"
                placeholder="닉네임을 입력하세요."
            />

        </div>
    )
}

export default JoinForm;