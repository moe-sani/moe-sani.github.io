---
title: "OpenClaw is Now Controlling My Rover via ROS 2"
date: 2026-02-24
tags: [Robotics, ROS2, Edge AI, Agents, Jetson, Computer Vision]
icon: "🎮"
read_time: 6
excerpt: "OpenClaw now controls my rover via ROS 2, turning high-level goals into real hardware actions with on-device perception and speech."
---

## Overview

I integrated OpenClaw — an agentic AI framework — with a physical rover running ROS 2. The result: a robot that can receive high-level natural language goals and autonomously decompose them into real hardware actions using on-device perception and speech.

## How It Works

The system consists of several interconnected components:

- **OpenClaw CLI** sends commands to ROS 2 topics
- **ROS 2 bridge node** (`ros2-ugv-bridge`) translates agentic commands into hardware-level messages
- **Drive control** via `/cmd_vel` (geometry_msgs/Twist) for forward/back and turning
- **Gimbal control** via `/ugv/joint_states` for pan-tilt camera positioning
- **Light control** via `/ugv/led_ctrl` for LED indicators
- **Camera capture service** via `/openclaw/capture` for on-demand snapshots

## The ROS 2 Architecture

The bridge package consumes topics from OpenClaw and republishes them to the UGV's native ROS 2 topics. This clean separation means the agentic layer doesn't need to know about hardware specifics — it just expresses intent.

OpenClaw skills are defined in markdown files, making them easy to read, modify, and extend. The runbook includes build steps, camera node configuration, bridge launch commands, and CLI test procedures.

## Key Takeaways

- Agentic AI frameworks can be cleanly integrated with ROS 2 robotic systems
- The separation between intent (OpenClaw) and execution (ROS 2 hardware bridge) creates a maintainable architecture
- On-device perception + speech enables truly autonomous operation without cloud dependency
- Open-source tooling (ROS 2 + OpenClaw) makes this accessible to the broader robotics community

> Source code available at [github.com/moe-sani/openclaw_ros2](https://github.com/moe-sani/openclaw_ros2)
