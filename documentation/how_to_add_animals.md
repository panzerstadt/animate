# Code structure

```
components
└── ANIMAL.js -> entire redux logic here (top component)
viewComponents
├── ANIMAL
│   ├── assets -> place your png/svg assets here
│   └── bodyParts
│       ├── Body
│       │   ├── reducer
│       │   │   └── index.js -> all your logic for moving the body parts here
│       │   ├── index.js -> join your assets and animation logic here
│       │   └── index.module.css -> position your assets in relation to body part here (if you have inner and outer body, position them in relation to the body component here)
│       └── Eyes
│           └── ...
├── index.js -> root body part, combine your bodyParts components here, accept commands here
└── index.module.css -> position your body parts in relation to root body part here
```

example with chick:

```
src/viewComponents/Chick
├── assets
│   ├── chick_0000_eyes.png
│   ├── chick_0001_right-hand.png
│   ├── chick_0002_left-hand.png
│   ├── chick_0003_feet.png
│   ├── chick_body.png
│   ├── chick_eyes_left.png
│   └── chick_eyes_right.png
├── bodyParts
│   ├── Body
│   │   ├── reducer
│   │   │   └── index.js
│   │   ├── index.js
│   │   └── index.module.css
│   └── Eyes
│       ├── reducer
│       │   └── index.js
│       ├── index.js
│       └── index.module.css
├── index.js
└── index.module.css
```
