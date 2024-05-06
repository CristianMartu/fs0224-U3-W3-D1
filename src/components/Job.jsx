import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Job = ({ data }) => {
  const dispatch = useDispatch()
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
      <Col xs={3}>
        <i
          className="bi bi-star-fill me-2"
          onClick={(e) => {
            e.target.classList.add('colorSelected')
            dispatch({ type: 'ADD_FAVOURITE_JOB', payload: data })
          }}
        ></i>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job
