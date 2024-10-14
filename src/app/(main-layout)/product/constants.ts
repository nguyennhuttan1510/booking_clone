import {
  FaBath,
  FaBed, FaRegCirclePause,
  FaShower,
  FaSmoking,
  FaTemperatureHalf,
  FaToiletPortable, FaTv,
  FaVolumeXmark,
  FaWifi
} from "react-icons/fa6";
import {AiOutlineClear} from "react-icons/ai";
import {GiSofa, GiTable} from "react-icons/gi";
import {MdOutlineIron} from "react-icons/md";
import {BiFridge} from "react-icons/bi";
import {FiTv} from "react-icons/fi";
import {PiHairDryer} from "react-icons/pi";

export const CONVENIENCE: {[key: string]: {code: number, name: string, icon: any}} = {
  '1':{
    code: 1,
    name: 'toilet',
    icon: FaToiletPortable
  },
  '2':{
    code: 2,
    name: 'shower',
    icon: FaShower
  },
  '3':{
    code: 3,
    name: 'Bath',
    icon: FaBath
  },
  '4':{
    code: 4,
    name: 'Bed',
    icon: FaBed
  },
  '5':{
    code: 5,
    name: 'Plugin',
    icon: FaRegCirclePause
  },
  '6':{
    code: 6,
    name: 'Clear',
    icon: AiOutlineClear
  },
  '7':{
    code: 7,
    name: 'Table',
    icon: GiTable
  },
  '8':{
    code: 8,
    name: 'Table',
    icon: GiTable
  },
  '9':{
    code: 9,
    name:'living room area',
    icon: GiSofa
  },
  '10':{
    code: 10,
    name:'Iron',
    icon: MdOutlineIron
  },
  '11':{
    code: 11,
    name:'Fridge',
    icon: BiFridge
  },
  '12':{
    code: 12,
    name:'TV',
    icon: FaTv
  },
  '13':{
    code: 13,
    name:'TV',
    icon: FiTv
  },
  '14':{
    code: 14,
    name:'Toilet public',
    icon: FaToiletPortable
  },
  '15':{
    code: 15,
    name:'HairDryer',
    icon: PiHairDryer
  },
  '16':{
    code: 16,
    name: 'Plugin',
    icon: FaRegCirclePause
  },
}

export const BOUNDARY_REVIEW_POINT = 7