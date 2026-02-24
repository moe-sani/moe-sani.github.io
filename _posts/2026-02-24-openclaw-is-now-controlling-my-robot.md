---
layout: post
title: "OpenClaw is now controlling my robot"
date: 2026-02-24
tags: [Robotics, ROS2, Edge AI, Agents, Jetson, Computer Vision]
excerpt: "OpenClaw now controls my rover via ROS 2, turning high-level goals into real hardware actions with on-device perception and speech."
image: /assets/images/posts/openclaw_robot.png
---

Robots are often called autonomous, but in practice they usually run a carefully scripted program. We hard-code behaviors, wire them to sensors, and hope we predicted every edge case. The robot executes, but it does not decide. That is why this project feels like a genuine step forward: **OpenClaw is now controlling my rover via ROS 2**. It does not just run a pre-planned sequence. It can take a high-level goal, break it into tasks, interact with hardware, and respond to what it sees.

In this post I share what I built, why it matters, and what still needs work.

## From scripts to agentic behavior

Traditional robotics autonomy is a pipeline of hard-coded behaviors connected to fixed thresholds. When the world changes, you add another if-statement or state-machine branch. With an on-device agent, the flow changes. You define a high-level objective, the agent decomposes it into subtasks, and those subtasks invoke tools for motion, sensing, and perception. This is not about replacing ROS 2 or classical control. It is about adding a decision layer on top of them.

## The robot and stack

The hardware is a Waveshare UGV rover with a Jetson Orin Nano running ROS 2 Humble. I kept the integration simple and standard: OpenClaw talks to the rover via ROS 2 topics and services. That decision alone has been a superpower. If I can echo a topic or call a service manually, I can validate what the agent is doing.

## The three skills powering it

### 1) Hardware control via ROS 2

The agent publishes drive commands to `/openclaw/cmd_vel`, gimbal commands to `/openclaw/gimbal`, light control to `/openclaw/lights`, and triggers a snapshot through the `/openclaw/capture` service. Those are then bridged to the rover's native topics. This keeps everything aligned with normal ROS 2 tooling.

### 2) Vision and understanding

The robot captures images from `/image_raw`. An image analysis tool (Gemini CLI) interprets them, so the agent can answer questions like what objects are visible, where a target is in the frame, or whether a path is clear.

### 3) Speech (TTS) on the robot

A text-to-speech tool generates audio and plays it on the robot, so the agent can communicate status in real time.

## Why this matters

We have talked about AI agents and robot autonomy for years, but in practice it often means cloud inference and brittle scripts. This approach is different. It runs on the edge, uses standard ROS 2 interfaces, enables goal-driven behavior rather than fixed sequences, and becomes more capable as you add skills. Instead of just control software, the robot begins to act more like a teammate.

## Benefits I have seen so far

The biggest benefit is iteration speed. I can add a skill or change behavior without rewriting the control stack. Debugging is simpler because everything is ROS 2 native, which means I can introspect and verify behavior with standard tools. The most important benefit, though, is flexibility. A high-level goal can adapt to sensor data and environment changes rather than collapsing the moment the world is slightly different from my assumptions.

## Real-world drawbacks (so far)

This is not magic. Agents are not real-time controllers, so I still rely on ROS 2 for time-sensitive loops. Safety boundaries matter more than ever because a powerful agent can make dangerous decisions if you do not constrain it. Tool reliability is another concern. If the camera or inference tool fails, the agent needs to degrade gracefully. The overall takeaway is that agentic AI is a powerful layer, not a replacement for robotics fundamentals.

## OpenClaw: the promise and the risks

OpenClaw has become one of the most talked-about open-source agent platforms, in part because it runs locally as a persistent service rather than a short-lived chat session. The upside is real: you get privacy and control, model flexibility, and a system that can continue working even when you are away. The downside is also real: giving an autonomous agent access to tools, file systems, and integrations raises the security bar significantly. The safest way to run this kind of software is to isolate it on a dedicated machine or sandbox environment, use non-critical accounts, and avoid exposing its ports directly to the internet. The core lesson is simple: autonomy is powerful, but it must be paired with strong operational hygiene.

## Demo: what I show in the video

In the demo, I show OpenClaw starting up and orienting the gimbal, moving the rover based on a goal, capturing and understanding images, and responding verbally with status updates. It is not just a scripted path. The agent chooses steps and handles the hardware directly.

## What is next

My next video will show a more complex mission where multi-step reasoning and actions are required, like inspect → reposition → verify → report. I am also preparing a generic ROS 2 skill for OpenClaw so others can integrate their robots quickly. I will share it soon.

## Final thoughts

This is the most alive I have seen a robot feel. Not because it moves, but because it decides. If you are building in robotics, autonomy, or edge AI, I would love to compare notes.
