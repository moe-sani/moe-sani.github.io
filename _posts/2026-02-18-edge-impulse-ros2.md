---
layout: post
title: "Edge AI inspection robot with Edge Impulse and ROS 2"
date: 2026-02-18
tags: [Robotics, ROS2, Edge AI, Edge Impulse, Computer Vision, Embedded AI, Open Source, Qualcomm]
excerpt: "Integrating Edge Impulse object detection with ROS 2 for real-time perception and tracking on an inspection robot."
image: /assets/images/posts/desk-robot.jpeg
---

![Moe at the robotics workstation](/assets/images/posts/desk-robot.jpeg)

I am building an Edge AI inspection robot, and the first milestone is complete.

Perception is a core pillar of modern robotics, and today it is inseparable from machine learning. The real challenge is not just training a model. It is getting a custom, lightweight model trained quickly and running reliably on real hardware.

I have now integrated Edge Impulse object detection models directly into the ROS 2 ecosystem.

**What is happening in the demo:**
- An Edge Impulse `.eim` object detection model runs inside a ROS 2 node
- The node publishes `vision_msgs/Detection2DArray` messages with bounding boxes
- A second ROS node consumes those detections
- The robot pan-tilt actively tracks and points toward the detected object

This is a strong step toward ROS-native Edge AI: fast iteration, embedded-friendly models, and clean integration into real robotic systems.

More updates coming soon. I will share deeper technical details and source code shortly.

Where do you think Edge AI matters most in robots?