import './SectionTitle.css'

export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <>
      <h2 className={`section-title ${light ? 'section-title--light' : ''}`}>
        {title}
      </h2>
      <p
        className={`section-subtitle ${light ? 'section-subtitle--light' : ''}`}
      >
        {subtitle}
      </p>
    </>
  )
}
