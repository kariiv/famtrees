import React, {Component} from 'react';
import ParticleAnimation from "../../../app/effects/particles";

class Particles extends Component {
    constructor(props) {
        super(props);
        this.particles = React.createRef();
    }

    componentDidMount() {
        const animation = new ParticleAnimation(this.particles.current,'rgba(255,255,255,0.6)');
        animation.build();
        animation.animate();
    }

    render() {
        return <canvas ref={this.particles} style={{position:"fixed", width:'-webkit-fill-available', zIndex: -1}}/>;
    }
}

export default Particles;
