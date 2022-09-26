import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'
import Axios from 'axios'
import { useLocation } from 'react-router-dom'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCardFooter,
  CProgress,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr>
          <td className="text-medium-emphasis">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-medium-emphasis">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
      <div className={classes} style={{ paddingTop: '75%' }}></div>
      {children}
      <ThemeView />
    </CCol>
  )
}

ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const DetailsUser = () => {
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]
  const [fetchUsersDetails, setFetchUsersDetails] = useState([])
  
  const location = useLocation();
  useEffect(() => {
    
    console.log(location.state.id);
    
    Axios.post('http://localhost:3005/users/userDetails', { userid: location.state.id}).then((request, response) => {
      setFetchUsersDetails(request.data)
    })

  }, []);

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Users Personal Information</CCardHeader>
            <CCardBody>
              
              
                {fetchUsersDetails.map((usersfetch) => (
                  <>
              <CTable hover bordered key={usersfetch.id} style={{ border: 0}}>
                
                
                <CTableBody>
              
                <CTableRow>
                    <CTableHeaderCell>Full Name </CTableHeaderCell>
                    <CTableDataCell>{usersfetch.firstn} &nbsp; {usersfetch.lastn}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Created Profile for </CTableHeaderCell>
                    <CTableDataCell>for {usersfetch.profilefor}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Email Address </CTableHeaderCell>
                    <CTableDataCell>{usersfetch.email}</CTableDataCell>    
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Mobile Number </CTableHeaderCell>
                    <CTableDataCell>{usersfetch.mobile}</CTableDataCell>    
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Gender</CTableHeaderCell>
                    <CTableDataCell>{usersfetch.gender}</CTableDataCell>  
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Religion</CTableHeaderCell>
                    <CTableDataCell>{usersfetch.religion}</CTableDataCell>    
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Mother Tongue</CTableHeaderCell>
                    <CTableDataCell>{usersfetch.mothertong}</CTableDataCell>    
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Date Of Birth </CTableHeaderCell>
                    <CTableDataCell> {usersfetch.dob}</CTableDataCell>    
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>City </CTableHeaderCell>
                    <CTableDataCell>{usersfetch.city}</CTableDataCell>    
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Current Applicaion Status </CTableHeaderCell>
                    <CTableDataCell>{usersfetch.request}
                    {/* if(usersfetch.request == 'Pending') { */}
                      <CButton
                      color={'primary'}
                      variant="outline"
                      className="mb-3 mb-xl-0"
                      onClick={() => {
                        Axios.post('http://localhost:3005/users/updateRequest', {email: usersfetch.email, request: 'Pending'}).then((request, response) => {
                          
                        })
                      }}
                    >
                      Pending
                    </CButton>
                    {/* } */}
                    <CButton
                        color={'success'}
                        variant="outline"
                        className="mb-3 mb-xl-0"
                        onClick={() => {
                          Axios.post('http://localhost:3005/users/updateRequest', {email: usersfetch.email, request: 'Approved'}).then((request, response) => {
                            
                          })
                        }}
                      >
                        Approve
                      </CButton>
                      <CButton
                        color={'danger'}
                        variant="outline"
                        className="mb-3 mb-xl-0"
                        onClick={() => {
                          Axios.post('http://localhost:3005/users/updateRequest', {email: usersfetch.email, request: 'Rejected'}).then((request, response) => {
                            
                          })
                        }}
                      >
                        Reject
                      </CButton>
                      
                    </CTableDataCell>    
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell>Date of Registration </CTableHeaderCell>
                    <CTableDataCell>{usersfetch.register}</CTableDataCell>    
                  </CTableRow>
                  
                </CTableBody>
              </CTable>

<CTable hover bordered key={usersfetch.id} style={{ border: 0}}>
                
                
<CTableBody>
<CTableRow>
  <CTableHeaderCell colSpan={2} style={{textAlign:'center'}}>Users additional Details</CTableHeaderCell>
    
  </CTableRow>
<CTableRow>
    <CTableHeaderCell>Living with Family or Not</CTableHeaderCell>
    <CTableDataCell>{usersfetch.livewith}</CTableDataCell>
  </CTableRow>
  <CTableRow>
    <CTableHeaderCell>Marital Status</CTableHeaderCell>
    <CTableDataCell>{usersfetch.maritalstatus}</CTableDataCell>
  </CTableRow>
  <CTableRow>
    <CTableHeaderCell>Had children</CTableHeaderCell>
    <CTableDataCell>{usersfetch.children}</CTableDataCell>    
  </CTableRow>
  <CTableRow>
    <CTableHeaderCell>Diet</CTableHeaderCell>
    <CTableDataCell>{usersfetch.diet}</CTableDataCell>    
  </CTableRow>
  <CTableRow>
    <CTableHeaderCell>Sub Community</CTableHeaderCell>
    <CTableDataCell>{usersfetch.subcommunity}</CTableDataCell>  
  </CTableRow>
  <CTableRow>
    <CTableHeaderCell>Qualification</CTableHeaderCell>
    <CTableDataCell>{usersfetch.qualification}</CTableDataCell>    
  </CTableRow>
  <CTableRow>
    <CTableHeaderCell>Currently working in</CTableHeaderCell>
    <CTableDataCell>{usersfetch.workin}</CTableDataCell>    
  </CTableRow>
  <CTableRow>
    <CTableHeaderCell>Profession</CTableHeaderCell>
    <CTableDataCell> {usersfetch.profession}</CTableDataCell>    
  </CTableRow>
  <CTableRow>
    <CTableHeaderCell>Income</CTableHeaderCell>
    <CTableDataCell>{usersfetch.income}</CTableDataCell>    
  </CTableRow>
  <CTableRow>
    <CTableHeaderCell>About Applicant</CTableHeaderCell>
    <CTableDataCell>{usersfetch.about}</CTableDataCell>    
  </CTableRow>
  <CTableRow>
    <CTableHeaderCell>Date of Registration </CTableHeaderCell>
    <CTableDataCell>{usersfetch.register}</CTableDataCell>    
  </CTableRow>
  
</CTableBody>
</CTable>
</>
                ))}
              </CCardBody>
              {/* <DocsExample href="components/buttons#outline-buttons"> */}
              
                      
                    
                    
                    
            {/* </DocsExample> */}
          </CCard>
        </CCol>
              </CRow>
    </>
  )
}

export default DetailsUser
