function Main() {
    const user = {
        name: "veronica",
        isLogin: true
    }

    if (user.isLogin) {
        return <div>{user.name}님, 로그인 됐습니다. 로그아웃하세요</div>
    } else {
        return <div>{user.name}님, 로그아웃 됐습니다. 로그인하세요</div>
    }
}

export default Main;