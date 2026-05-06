import "./App.css"
import AvatarCard from "./components/AvatarCard";

const avatars = [
  {
    id: 1,
    name: "Nova",
    role: "Navigator",
    power: "Routing",
    initials: "NV",
  },
  {
    id: 2,
    name: "Flux",
    role: "State Keeper",
    power: "useState",
    initials: "FX",
  },
  {
    id: 3,
    name: "Memo",
    role: "Optimizer",
    power: "Memoization",
    initials: "MM",
  },
];

function Shell({title, children}){
  return (
    <section>
      <p>Resuable Shell</p>
      <h2>{title}</h2>
      {children}
      <p>This is only for testing</p>
    </section>
  )
}

function App() {
  return (
    <>
    <h1>Children in React</h1>
    <Shell title="Cap. America">
      <h1>This is inside Shell</h1>
      <p>This is also inside Shell</p>
    </Shell>

    <h1>Hello From Dev</h1>
    <section>
      {avatars.map((avatar)=>(
        <AvatarCard 
        key={avatar.id}
        level={avatar.id===1?"Captain":undefined}
        avatar={avatar}
        />
      ))}
    </section>
    </>
  )
}

export default App