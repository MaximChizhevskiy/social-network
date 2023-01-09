type MessageType = {
    id:number
    message:string
}

type DialogsType = {
    id: number
    name: string
}

type PostType = {
    id: number
    message:string
    likesCount: number
}

type ProfilePageType = {
    posts: Array<PostType>
}

type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
}

type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Давно не виделись", likesCount: 15},
            {id: 2, message: "Вот мой новый пост", likesCount: 17},
            {id: 3, message: "Обработал фоточки", likesCount: 19},
            {id: 4, message: "Тяжёлая учёба", likesCount: 20},
            {id: 5, message: "Супер выходные", likesCount: 25},
            {id: 6, message: "Просто пост", likesCount: 3}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Привет!"},
            {id: 2, message: "Как дел?"},
            {id: 3, message: "Чем занят?"},
            {id: 4, message: "На связи?"},
            {id: 5, message: "Ау?"},
            {id: 6, message: "Есть время?"}
        ],
        dialogs: [
            {id: 1, name: 'Maxim'},
            {id: 2, name: 'Xeniya'},
            {id: 3, name: 'Alena'},
            {id: 4, name: 'Daulet'},
            {id: 5, name: 'Dauren'},
            {id: 6, name: 'Wova'}
        ]
    },
    sidebar: {}
}

export default state;