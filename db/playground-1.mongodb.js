// Select the database to use.
use('fecdb');
db.getCollection('products').insertOne({
  "name": "PeForce RTX 4090",
  "price": 1599.00,
  "description": "The VIDIA PeForce RTX 4090 is the ultimate PeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds, unprecedented productivity, and new ways to create. Its powered by the VIDIA Ada Lovelace architecture and comes with 24 GB of G6X memory to deliver the ultimate experience for gamers and creators."
})

db.getCollection('specs').insertOne(
  {
    "product_id": 1,
    "vidia_cuda_cores": 16384,
    "boost_clock": 2.52,
    "base_clock": 2.23,
    "standard_memory_config": "24 GB GDDR6X",
    "memory_interface": "384-bit",
    "ray_tracing_cores": "3rd Generation",
    "tensor_cores": "4th Generation",
    "vidia_architecture": "Ada Lovelace",
    "vidia_dlss": 3,
    "vidia_reflex": "Yes",
    "vidia_broadcast": "Yes",
    "pci_express_gen_4": "Yes",
    "resizeable_bar": "Yes",
    "vidia_geforce_experience": "Yes",
    "vidia_ansel": "Yes",
    "vidia_freestyle": "Yes",
    "vidia_shadowplay": "Yes",
    "vidia_highlights": "Yes",
    "vidia_gsync": "Yes",
    "game_ready_drivers": "Yes",
    "vidia_studio_drivers": "Yes",
    "vidia_omniverse": "Yes",
    "directx_12_ultimate": "Yes",
    "vidia_gpu_boost": "Yes",
    "vlink": "No",
    "vulkan": "Yes",
    "vidia_encoder": "Yes",
    "vidia_decoder": "Yes",
    "av1_encode": 8.9,
    "av1_decode": "Yes",
    "cuda_capabilities": "4K at 240Hz or 8K at 60Hz with DSC, HDR",
    "vr_ready": "Yes",
    "maximum_resolution": "HDMI(2), 3x DisplayPort(3)",
    "standard_display_connectors": "up to 4(4)",
    "multimonitor": 2.3,
    "hdcp": "304 mm",
    "length": "137 mm",
    "width": "3-Slot (61mm)",
    "slots": 90,
    "maximum_gpu_temp": 19,
    "idle_power": 25,
    "video_playback_power": 315,
    "average_gaming_power": 450,
    "total_graphics_power": 850,
    "required_system_power": "3x PCIe 8-pin cables (adapter in box) OR 450 W or greater PCIe Gen 5 cable"
  }
)