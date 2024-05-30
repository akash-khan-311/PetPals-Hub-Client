import {
  GiEgyptianBird,
  GiFishBucket,
  GiRabbit,
  GiReptileTail,
  GiSittingDog
} from 'react-icons/gi'
import { MdPestControlRodent } from 'react-icons/md'
import { FaCat, FaCow } from 'react-icons/fa6'
import { IoMdDoneAll } from 'react-icons/io'
export const categories = [

  {
    id: 1,
    label: 'Dogs',
    icon: GiSittingDog,
    description: 'Loyal and loving companions.'
  },
  {
    id: 2,
    label: 'Cats',
    icon: FaCat,
    description: 'Playful and affectionate.'
  },
  {
    id: 3,
    label: 'Birds',
    icon: GiEgyptianBird,
    description: 'Beautiful and melodic.'
  },
  {
    id: 4,
    label: 'Rabbits',
    icon: GiRabbit,
    description: 'Fluffy and gentle.'
  },
  {
    id: 5,
    label: 'Rodents',
    icon: MdPestControlRodent,
    description: 'Small and furry pets.'
  },
  {
    id: 6,
    label: 'Reptiles',
    icon: GiReptileTail,
    description: 'Perfect for adventurers.'
  },
  {
    id: 7,
    label: 'Fish',
    icon: GiFishBucket,
    description: 'Peaceful aquarium pets.'
  },
  {
    id: 8,
    label: 'Farm Animals',
    icon: FaCow,
    description: 'Larger companion animals.'
  }
]
