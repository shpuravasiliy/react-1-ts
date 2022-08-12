import React, {useState} from 'react';

export default {
    title: 'React/ReactMemo demo',
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

type UsersPropsType = {
    users: string[]
}

const UsersSecret = (props: UsersPropsType) => {
    console.log('USERS')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

// const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

// export const OnMode = Template.bind({});
// OnMode.args = {
//     value: true,
// };

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);
    return <>
        <button onClick={() => setCounter(counter + 1)} children={'inc'}/>
        <button onClick={() => setUsers([...users, 'new User'])} children={'add user'}/>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}