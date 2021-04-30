import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Card, CardHeader, CardTitle, CardBody, CardActions, CardImage, CardSubtitle } from '@progress/kendo-react-layout';

class Home extends React.Component {
    state = {
        visible: false
    };
    
    toggleDialog = () => {
        this.setState({
            visible: !this.state.visible
        });
    }
    render() {
        return (
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {/* Modal code goes here */}
            <div>
            {this.state.visible && <Dialog title={"Please confirm"} onClose={this.toggleDialog}>
              <p style={{ margin: "25px", textAlign: "center" }}>Do you want to continue to pay with Paypal?</p>
              <DialogActionsBar>
                <button className="k-button" onClick={this.toggleDialog}>No</button>
                <button className="k-button" onClick={this.toggleDialog}>Yes</button>
              </DialogActionsBar>
            </Dialog>}
          </div>
             <div style={{width: '45%'}}>
              <Card>
                <CardImage src="https://wander-lush.org/wp-content/uploads/2021/01/Medellin-Airbnb-Penthouse-in-Laureles.jpg" />
                <div>
                  <CardHeader>
                  <h1 CardTitle={true}>Comfy 1 Bedroom Condo Downtown</h1>
                    <div CardSubtitle={true}>
                      <span className="reviews">
                        <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                        <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                        <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                        <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                        <span className="k-icon k-i-star-outline" />
                        <div>$200/night (3 nights min.)</div>
                      </span>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p>The right place to be if you're in NYC, it comes with a pool, wifi access and a free parking lot where you can also smoke and have parties with friends. 
                    </p>
                  </CardBody>
                  <CardActions>
                  <button className="k-button k-primary k-flat" onClick={this.toggleDialog}>Book Now</button>
                  </CardActions>
                </div>
              </Card>
            </div>
            <div style={{width: '45%'}}>
              <Card>
                <CardImage src="https://media.cntraveler.com/photos/5e9907c14ab09800086faf63/master/pass/airbnb-view-37143825.jpg" />
                <div>
                  <CardHeader>
                  <h1 CardTitle={true}>Modern English Basement Apartment</h1>
                    <div CardSubtitle={true}>
                      <span className="reviews">
                        <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                        <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                        <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                        <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                        <span className="k-icon k-i-star-outline" />
                        <div>$200/night (3 nights min.)</div>
                      </span>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p>The right place to be if you're in NYC, it comes with a pool, wifi access and a free parking lot where you can also smoke and have parties with friends. 
                    </p>
                  </CardBody>
                  <CardActions>
                    <button className="k-button k-primary k-flat" onClick={this.toggleDialog}>Book Now</button>
                  </CardActions>
                </div>
              </Card>
            </div>
          </div>
        )
    }
}

export default Home;
