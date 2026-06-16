---
title: "Edge AI Inspection Robot with Edge Impulse and ROS 2"
date: 2026-02-18
tags: [Robotics, ROS2, Edge AI, Edge Impulse, Computer Vision, Embedded AI, Open Source, Qualcomm]
icon: "🔍"
read_time: 5
excerpt: "Integrating Edge Impulse object detection with ROS 2 for real-time perception and tracking on an inspection robot."
---

## Overview

I'm building an Edge AI inspection robot, and the first milestone is complete. Perception is a core pillar of modern robotics, and today it is inseparable from machine learning. The real challenge is not just training a model — it is getting a custom, lightweight model trained quickly and running reliably on real hardware.

## What's Happening in the Demo

I have now integrated Edge Impulse object detection models directly into the ROS 2 ecosystem:

- An **Edge Impulse `.eim` object detection model** runs inside a ROS 2 node
- The node publishes `vision_msgs/Detection2DArray` messages with bounding boxes
- A second ROS node consumes those detections
- The robot's **pan-tilt actively tracks and points toward the detected object**

## Why This Matters

This is a strong step toward **ROS-native Edge AI**: fast iteration, embedded-friendly models, and clean integration into real robotic systems.

The Edge Impulse platform handles the heavy lifting of model training, quantisation, and deployment packaging. The `.eim` format means the model runs optimised for the target hardware without manual conversion steps.

## Technical Stack

| Component | Technology |
|-----------|-----------|
| ML Platform | Edge Impulse Studio |
| Model Format | `.eim` (Edge Impulse Model) |
| Robot Framework | ROS 2 |
| Detection Messages | `vision_msgs/Detection2DArray` |
| Hardware | Pan-tilt inspection robot platform |
| Deployment | Edge Impulse Linux SDK |

## Key Takeaways

- Edge Impulse models integrate cleanly into ROS 2 via standard message types
- The `.eim` format eliminates manual model conversion and optimisation steps
- Pan-tilt tracking demonstrates closed-loop perception-to-action on real hardware
- This architecture scales to more complex inspection tasks (anomaly detection, multi-class classification)

> More updates coming soon — deeper technical details and source code to follow.
