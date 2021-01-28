import React, { Component, createContext, useState, useEffect } from "react";
import { auth, generateUserDocument } from "../firebase";

export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      auth.onAuthStateChanged(async (userAuth) => {
        const user = await generateUserDocument(userAuth);
        setUser({ user });
      });
    })();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

// class UserProvider extends Component {
//     state = {
//         user: null,
//         fromDashboard: null
//     };
//     componentDidMount = async () => {
//         auth.onAuthStateChanged(async userAuth => {
//             const user = await generateUserDocument(userAuth);
//             this.setState({ user });
//         });
//     };

//     render() {
//         return (
//             <UserContext.Provider value={this.state}>
//                 {this.props.children}
//             </UserContext.Provider>
//         );
//     };
// };
export default UserProvider;
