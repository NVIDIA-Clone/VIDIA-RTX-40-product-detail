-- \c VIDIA_database

DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS specs CASCADE;
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    price NUMERIC,
    description TEXT
);

CREATE TABLE specs (
    spec_id SERIAL PRIMARY KEY,
    product_id INT,
    FOREIGN KEY(product_id) REFERENCES products(product_id),
    vidia_cuda_cores INT,
    boost_clock NUMERIC,
    base_clock NUMERIC,
    standard_memory_config VARCHAR(50),
    memory_interface VARCHAR(50),
    ray_tracing_cores VARCHAR(50),
    tensor_cores VARCHAR(50),
    vidia_architecture VARCHAR(50),
    vidia_dlss INT,
    vidia_reflex BOOLEAN,
    vidia_broadcast BOOLEAN,
    pci_express_gen_4 BOOLEAN,
    resizeable_bar BOOLEAN,
    vidia_geforce_experience BOOLEAN,
    vidia_ansel BOOLEAN,
    vidia_freestyle BOOLEAN,
    vidia_shadowplay BOOLEAN,
    vidia_highlights BOOLEAN,
    vidia_gsync BOOLEAN,
    game_ready_drivers BOOLEAN,
    vidia_studio_drivers BOOLEAN,
    vidia_omniverse BOOLEAN,
    directx_12_ultimate BOOLEAN,
    vidia_gpu_boost BOOLEAN,
    vlink BOOLEAN,
    vulkan BOOLEAN,
    vidia_encoder VARCHAR(50),
    vidia_decoder VARCHAR(50),
    av1_encode BOOLEAN,
    av1_decode BOOLEAN,
    cuda_capabilities NUMERIC,
    vr_ready BOOLEAN,
    maximum_resolution VARCHAR(50),
    standard_display_connectors VARCHAR(50),
    multimonitor VARCHAR(50),
    hdcp NUMERIC,
    length VARCHAR(50),
    width VARCHAR(50),
    slots VARCHAR(50),
    maximum_gpu_temp INT,
    idle_power INT,
    video_playback_power INT,
    average_gaming_power INT,
    total_graphics_power INT,
    required_system_power INT,
    supplementary_power_connector VARCHAR(50)
);


