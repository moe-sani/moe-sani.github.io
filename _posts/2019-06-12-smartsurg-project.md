---
layout: post
title: "SMARTsurg: Designing More Intuitive Interfaces for Surgical Robotics"
date: 2019-06-12
tags: [Surgical Robotics, Wearable Sensing, Teleoperation, Machine Learning, Healthcare]
excerpt: "How wearable hand tracking, haptic teleoperation and machine learning can help surgical robots respond to the natural movements of experienced surgeons."
image: /assets/images/publications/towards_finger.png
image_fit: contain
---

Robot-assisted minimally invasive surgery can offer greater precision and smaller incisions, but it also changes how a surgeon interacts with their instruments.

Instead of holding a tool directly, the surgeon operates a master interface that translates hand movements into motion at the patient side. If that interface does not reflect the fine, coordinated movements surgeons already use, the technology can introduce extra cognitive load and require substantial retraining.

The **SMARTsurg** project explored a different approach: design the robotic system around the surgeon.

## The SMARTsurg vision

SMARTsurg—SMart weArable Robotic Teleoperated Surgery—was a European Horizon 2020 project coordinated by the University of the West of England and Bristol Robotics Laboratory. It brought together robotics, clinical and technology partners to develop a more intuitive platform for robot-assisted minimally invasive surgery.

The project combined several research areas:

- dexterous surgical instruments;
- wearable hand interfaces and haptic feedback;
- augmented-reality visualisation and real-time 3D reconstruction;
- active constraints for safer robot motion;
- and user-centred evaluation with surgeons.

I contributed to the research at Bristol Robotics Laboratory, focusing on how natural hand and finger motion could be measured, analysed and mapped to robotic surgical instruments.

## Start by understanding how surgeons already move

Cardiac microsurgery demands small, precise motions. Surgeons use instruments such as Castroviejo needle holders through coordinated movements of the thumb, index finger, middle finger, wrist and tool.

Before designing a robotic master controller, we needed to understand that motion quantitatively.

We developed a lightweight wearable sensing system using inertial measurement units to capture finger joint angles and fingertip positions without preventing the surgeon from handling conventional instruments. The setup tracked the thumb, index and middle fingers during representative suturing and knot-tying tasks on an ex-vivo cardiac model.

The wearable measurements were validated against an NDI Polaris optical tracking system. This gave us a reference for evaluating sensor accuracy and studying which joints contributed most to the surgical motion.

The results showed that the proximal interphalangeal and metacarpophalangeal joints produced larger ranges of motion and changed faster than the other measured finger joints. The thumb covered the largest fingertip workspace. These are practical design inputs: they indicate where a master interface needs fidelity and where sensing can potentially be simplified.

This work was published as [*Towards Finger Motion Tracking and Analyses for Cardiac Surgery*](https://doi.org/10.1007/978-3-030-31635-8_188).

## From recorded movement to robot commands

Measuring the hand was the first step. The next challenge was mapping that motion to a surgical tool.

![Concept for mapping a surgeon's measured hand and tool motion through a deep neural network](/assets/images/publications/concept_ft.png)

*Hand and tool data captured during surgical trials provided the inputs and targets for learning an intuitive control mapping.*

During mock cardiac microsurgery, we recorded wrist, hand, finger and surgical-tool motion. Deep neural networks were then trained to estimate the tool's orientation and jaw opening from the surgeon's hand movements.

The objective was not to automate the surgeon's judgement. It was to make teleoperation feel more like the motion they already perform in open surgery. In the pilot study, the learned mapping estimated surgical-instrument pose with a mean squared error below 0.3% in normalised units.

The resulting research was published in the *Journal of Medical Robotics Research* as [*Mapping Surgeons Hand/Finger Movements to Surgical Tool Motion During Conventional Microsurgery Using Machine Learning*](https://doi.org/10.1142/S2424905X21500045).

## Exploring less intrusive sensing

Wearable interfaces create a difficult engineering trade-off. More sensors can capture more detail, but they can also add weight, wiring, calibration and restrictions to the user's movement.

One related study investigated whether deformation of the palm itself could provide useful information about finger and thumb pose. IMU sensors mounted on the palm captured changes in its arch as the digits moved. Principal-component analysis and dynamic neural networks were used to estimate joint angles, with optical tracking providing the ground truth.

![Palm-mounted IMU sensing network used to estimate finger and thumb pose](/assets/images/publications/Proposed-Sensing-Network-left-IMU-sensors-on-the-palm.png)

*Palm deformation offers another signal for estimating digit pose while reducing instrumentation directly on the fingers.*

The approach achieved an average joint-angle estimation error below 4.1%. The study, [*Palm Reading: Using Palm Deformation for Fingers and Thumb Pose Estimation*](https://doi.org/10.1109/ROBIO49542.2019.8961467), was presented at IEEE ROBIO 2019.

## Closing the loop with teleoperation and haptics

Across the wider SMARTsurg programme, wearable controllers combined IMUs and Hall-effect sensors to teleoperate surgical instruments. The project also explored haptic feedback, allowing information about interaction with tissue or constraints in the surgical workspace to be communicated back to the operator.

This closed loop is important. A surgical interface should not only capture what the surgeon wants the robot to do; it should also return meaningful information about what the robot is experiencing.

## What the project taught me

### Interfaces should adapt to expertise

Experienced surgeons already have highly developed motor skills. A good robotic interface should preserve and augment those skills where possible instead of forcing the user to learn an arbitrary control language.

### Ergonomics and data quality are connected

A sensor that restricts the user's movement changes the behaviour it is supposed to measure. Wearable sensing must therefore be accurate, lightweight and unobtrusive enough to capture natural motion.

### Machine learning can translate between embodiments

The human hand and a robotic surgical tool do not share the same kinematics. Learning a constrained mapping between them can help bridge that difference without handing clinical decision-making to the model.

### Surgical robotics is inherently multidisciplinary

Progress depends on robotics, sensing, machine learning and control, but also on clinical workflow, human factors, safety and direct evaluation with surgeons. No single subsystem can make the overall platform intuitive by itself.

---

## Explore the research

- [SMARTsurg project website](https://www.smartsurg-project.eu/)
- [European Commission CORDIS project record](https://cordis.europa.eu/project/id/732515/results)
- [Finger-motion tracking study](https://doi.org/10.1007/978-3-030-31635-8_188)
- [Machine-learning hand-to-tool mapping study](https://doi.org/10.1142/S2424905X21500045)
- [Palm-deformation pose-estimation study](https://doi.org/10.1109/ROBIO49542.2019.8961467)
