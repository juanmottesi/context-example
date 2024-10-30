import { useEffect, useState } from "react"

import { AuthContext } from "@/hooks/AuthContext";
import Api from "@/service/Api";
import { deleteToken, isToken, token } from "@/service/Token";
import User from "@/components/User";

const Home = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    Api.login(email, password).then((user) => setUser(user)) 
  }

  useEffect(() => {
    if (isToken()) {
      Api.getUser(token()).then((user) => setUser(user))
    }
  }, [])

  const handleLogOut = () => {
    setUser(null);
    deleteToken();
  }

  if (!user) {
    return <View><Text>Loading...</Text></View>
  }

  return (
    <AuthContext.Provider value={user}>
      <User />
    </AuthContext.Provider>
  )
}

export default Home
