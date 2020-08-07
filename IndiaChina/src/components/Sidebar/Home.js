import React from 'react'
function Home(){
    return(
        <div style={{padding:'2%'}}>

            <div style={{display:'flex',flexDirection:'row'}}>

                <div style={{width:'75%', paddingRight:'2%'}}>
                    <p className="hme-pge-back" style={{fontSize:'1.2vmax',  textAlign:'justify',textTransform:'none'}}> The COVID-19 pandemic has come with an unprecedented global economic crisis.
                        The Indian government, RBI and various organisations have taken various response actions to this in order to push the Indian economy towards the path to recovery.
                        Arthashastra Intelligence COVID-19 Economic Impact Dashboard reflects our continuous work on analysing government policy responses to COVID, studying state finances,
                        and monitoring the performance of various macroeconomic indicators to bring you essential insights and real-time updates on Indian economy in the wake of COVID-19, all in one place.</p>
                </div>

                <div className="covid-img" style={{width:'25%', paddingLeft:'1%'}}>
                </div>
            </div>


            <div style={{alignContent:"center",display:'flex',flexDirection:'column', justifyContent:'space-between',paddingTop:'5vh'}}>

                {/* <Link to='/Government Notifications and Advisories'><button style={{width:'25vw',height:'50px',backgroundColor:'black',color:'white',borderRadius:'80px',margin:'10px',transform:'translate(40vw,1vh)'}}>Government Notifications and Advisories</button></Link><br></br> */}
                {/* <Card style={{width:'70vw',alignItems: 'center',justifyContent: 'space-between',borderRadius:'50px',transform:'translate(15vw,1vh)'}}>
                <CardBody style={{width:"100%",transform:'translate(8vw,0vh)',display:"flex",flexDirection:"row",justifyContent:'space-between'}}>
            <div style={{display:"flex",flexDirection:"row"}}>
                <div >
                    <Link to='/Covid-19 Economic Impact Dashboard'><button style={{width:'25vw',height:'45vh',marginTop:'11%',backgroundColor:'black',color:'white',borderRadius:'80px',fontSize:'135%'}}>Covid-19 Economic Impact Dashboard</button></Link>
                </div>
                <div style={{padding:'4%'}}>
                    <Link to='/Key Macroeconomic Indicators'><button style={{width:'25vw',height:'50px',backgroundColor:'black',color:'white',borderRadius:'80px',margin:'10px'}}>Key Macroeconomic Indicators</button></Link><br></br>
                    <Link to='/Sector-wise Impact'><button style={{width:'25vw',height:'50px',backgroundColor:'black',color:'white',borderRadius:'80px',margin:'10px'}}>Sector-wise Impact</button></Link><br></br>
                    <Link to='/State-wise Stimulus Package'><button style={{width:'25vw',height:'50px',backgroundColor:'black',color:'white',borderRadius:'80px',margin:'10px'}}>State-wise Stimulus Package</button></Link><br></br>
                    <Link to='/AI Economic Impact Survey'><button style={{width:'25vw',height:'50px',backgroundColor:'black',color:'white',borderRadius:'80px',margin:'10px'}}>AI Economic Impact Survey</button></Link><br></br>
                    <Link to='/Revival Strategies'><button style={{width:'25vw',height:'50px',backgroundColor:'black',color:'white',borderRadius:'80px',margin:'10px'}}>Revival Strategies</button></Link><br></br>
                    <Link to='/Monetary policy measures'><button style={{width:'25vw',height:'50px',backgroundColor:'black',color:'white',borderRadius:'80px',margin:'10px'}}>Monetary policy measures</button></Link>
                    <Link to='/Fiscal'><button style={{width:'25vw',height:'50px',backgroundColor:'black',color:'white',borderRadius:'80px',margin:'10px'}}>Fiscal</button></Link><br></br>
                </div>
            </div>
            </CardBody>
            </Card> */}
            </div>
        </div>
    )
}
export default Home
