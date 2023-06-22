import { Heading } from './Heading.tsx'

type PropsType = {
  title: string
  body: string
  isExpanded?: boolean
}

export const Accordion = (props: PropsType) => {
  const { title, body, isExpanded = false } = props

  return (
    <>
      <Heading tag="h2" title={title} />
      {!isExpanded && <div>{body}</div>}
    </>
  )
}
