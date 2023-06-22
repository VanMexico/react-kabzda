type PropsType = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  title: string
}

export const Heading = (props: PropsType) => {
  const { tag, title } = props

  switch (tag) {
    case 'h2':
      return <h2>{title}</h2>
    case 'h3':
      return <h3>{title}</h3>
    case 'h4':
      return <h4>{title}</h4>
    case 'h5':
      return <h5>{title}</h5>
    case 'h6':
      return <h6>{title}</h6>
    default:
      return <h1>{title}</h1>
  }
}
