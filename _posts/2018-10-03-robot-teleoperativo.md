---
layout: post
title: "Robot Teleoperativo: Immersive Robotics for Hazardous Environments"
date: 2018-10-03
tags: [Teleoperation, Robotics, Human-Robot Interaction, Active Perception, Industrial Safety]
excerpt: "Inside an IIT research programme combining a quadruped robot, dexterous manipulation, force feedback and virtual reality to keep people out of hazardous environments."
image: /assets/images/posts/2018_10_03/robot-teleoperativo-system.png
image_fit: contain
---

How do you send a robot into a hazardous environment while giving its operator enough awareness and control to do useful work?

That was the central challenge behind **Robot Teleoperativo**, a research programme at the Italian Institute of Technology (IIT), developed with Italy's National Institute for Insurance against Workplace Injuries (INAIL).

The objective was not simply to drive a robot from a safe distance. It was to build a collaborative teleoperation system that could carry a human operator's perception and intent into environments where direct exposure would be dangerous—from industrial accidents and disaster-response sites to areas affected by toxic chemicals, radiation or explosion risk.

## Why remote operation is harder than remote control

A conventional remote-controlled machine gives the operator commands and returns a camera feed. That can be enough for simple navigation, but it becomes limiting when the robot must climb, manipulate an object or respond to an environment the operator cannot see directly.

Useful teleoperation depends on a complete perception-action loop:

- The operator needs timely visual and spatial information from the remote scene.
- Their hand and arm movements must map naturally onto the robot.
- Force feedback needs to communicate contact with the environment.
- The robot needs enough onboard sensing and intelligence to assist when direct control is slow or ambiguous.
- The entire system must remain stable despite communication delays and differences between human and robot kinematics.

Robot Teleoperativo brought those pieces together as one integrated system.

## The system: a FIELD robot and a PILOT station

The project separated the platform into two closely connected sides.

On the **FIELD** side, a HyQReal hydraulic quadruped carried a custom multi-degree-of-freedom robotic arm and dexterous end effector. The legs provided mobility over difficult terrain while the manipulator enabled the robot to interact with doors, tools and other objects. Proprioceptive and environmental sensors gave the system information about its own state and its surroundings.

On the **PILOT** side, the operator used an immersive virtual-reality display, a force-feedback arm and a hand exoskeleton. Live video, point-cloud data and a virtual representation of the robot helped the operator understand the remote scene and control the robot's movement.

![Robot Teleoperativo control architecture connecting the field robot, perception system, force-feedback arm and hand exoskeleton](/assets/images/posts/2018_10_03/robot-teleoperativo-control-architecture.png)

*The project architecture linked immersive perception and teleoperation software with the quadruped, manipulator, haptic arm and hand exoskeleton. Figure: IIT/INAIL Robot Teleoperativo project.*

The important idea was integration. Locomotion, manipulation, perception and human-machine interaction were not isolated demonstrations; they had to operate together as one remote robotic system.

## My contribution: helping the robot listen actively

My work within the project focused in part on robotic perception—specifically, how a robot can estimate where a sound is coming from when a single observation is not enough.

A fixed microphone array can localise some sounds, but a mobile robot has another option: it can move its acoustic sensor to gather a more informative measurement. The question then becomes **where should the sensor move next?**

We developed a next-best-view approach for estimating the positions of stationary sound sources. An Extended Kalman Filter maintained an estimate of each source and its uncertainty. The planner evaluated candidate sensor poses using expected mutual information, movement cost and the sensor's characteristics, then selected a pose likely to reduce that uncertainty.

In practical terms, the robot did not just listen passively. It moved deliberately to hear the scene from a better position.

We demonstrated the method with a motion-capable acoustic sensor on a six-degree-of-freedom manipulator in indoor and outdoor experiments. The work was later published at the 2019 International Conference on Advanced Robotics as [*Towards Sound-Source Position Estimation Using Mutual Information for Next-Best-View Motion Planning*](https://doi.org/10.1109/ICAR46387.2019.8981599).

## From individual subsystems to realistic tasks

The broader programme progressively integrated the operator station and field robot. Demonstrations included uneven-terrain navigation, stair climbing, opening doors, accessing firefighting equipment and retrieving objects.

In the final demonstration of the first project phase, the FIELD robot was operated in real time from a PILOT station approximately 20 metres away and without direct line of sight. That matters because it tested the system as it was intended to be used: not as a collection of laboratory components, but as a remotely embodied tool for a human operator.

## What I took from the project

Robot Teleoperativo reinforced several ideas that still shape how I think about autonomous and remotely operated systems.

### Telepresence is a systems problem

Better cameras alone do not create better teleoperation. The quality of the experience depends on sensing, visualisation, control, haptics, communications and mechanical design working together.

### Shared intelligence is more useful than either extreme

Pure manual control places a heavy cognitive load on the operator. Full autonomy is difficult to trust in unstructured, safety-critical environments. The most practical architecture often sits between them: the human supplies judgement and intent while the robot assists with perception, stability and constrained motion.

### Movement can improve perception

The active-audition work demonstrated a principle that applies far beyond acoustics. A robot is not limited to interpreting the sensor data it already has; it can choose an action that makes the next measurement more useful.

That connection between perception, decision-making and physical action is one of the foundations of intelligent robotics.

---

## Explore the project

- [Robot Teleoperativo project page at IIT](https://advr.iit.it/projects/inail-scc/teleoperazione)
- [Sound-source next-best-view research paper](https://doi.org/10.1109/ICAR46387.2019.8981599)

*Cover image and control architecture courtesy of the IIT/INAIL Robot Teleoperativo project.*
