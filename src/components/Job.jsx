import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const favourites = useSelector((state) => state.favouriteJob.content)

  return (
    <Row
      className={
        favourites.includes(data)
          ? 'mx-0 mt-3 p-3 border border-primary rounded'
          : 'mx-0 mt-3 p-3 border border-secondary-subtle rounded'
      }
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1}>
        <i
          className={favourites.includes(data) ? 'bi bi-star-fill me-2 colorSelected' : 'bi bi-star-fill me-2'}
          onClick={(e) => {
            if (!favourites.includes(data)) {
              dispatch({ type: 'ADD_FAVOURITE_JOB', payload: data })
            } else {
              dispatch({ type: 'REMOVE_FAVOURITE_JOB', payload: data._id })
            }
          }}
        ></i>
      </Col>
    </Row>
  )
}

export default Job
