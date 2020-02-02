import React, {Component} from "react";
import NavbarComponent from "../../components/navbar/navbar";
import CarouselComponent from "../../components/carousel/carousel";
import Header from "../../components/header/header";
import Header2 from '../../components/header/header2';
import * as d3 from 'd3';
import Drawer from "../../components/drawer/drawer";

const galleryItem = require('../../assets/galerie.png');
const galleryItem2 = require('../../assets/tamwil.png');
const galleryItem3 = require('../../assets/consulting.png');
const csvFilePath = require('../../assets/subvention.csv');

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assoc: []
        }

    }

    getDatabaseUpdate = async () => {
        let data = await d3.csv(csvFilePath);
        data = JSON.stringify(data);
        data = JSON.parse(data);
        let assoc = [];
        let sortedData = await this.sort_by_key(data, 'Subvention');
        for (let i = 0; i < 5; i++) {
            assoc.push(sortedData[i]['Titre'])
        }
        this.setState({
            assoc: assoc
        })

    };

    componentDidMount() {
        this.getDatabaseUpdate();
    }

    sort_by_key(array, key) {
        return array.sort(function (a, b) {
            let x = parseInt(a[key]);
            let y = parseInt(b[key]);
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
    }

    render() {
        let logged = localStorage.getItem('loggedIn');
        return (
            <div>
                <NavbarComponent isLogged={logged}/>
                <CarouselComponent/>
                <div className={'row'}>
                    <Header title={'Top 5 evenement subventionnes'}/>
                    <Header title={'Top 5  des regions  subventionnes'}/>
                    <Header title={'Top 5  des regions  subventionnes'}/>
                </div>
                <div className={'row'}>
                    <Header2 image={galleryItem}/>
                    <Header2 image={galleryItem2}/>
                    <Header2 image={galleryItem3}/>
                </div>
            </div>
        );
    }
}

export default Landing;
