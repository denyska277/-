let паркан = 0
function БЕБРА2 () {
    паркан = 0
    for (let index = 0; index < 100; index++) {
        blocks.fill(
        STONE_BRICKS,
        pos(паркан, 0, -25),
        pos(паркан, 5, -25),
        FillOperation.Replace
        )
        blocks.place(STONE_BRICK_STAIRS, pos(паркан, 0, -24))
        blocks.place(STONE_BRICK_STAIRS, pos(паркан, 5, -24))
        паркан += 1
    }
}
function БЕБРА () {
    паркан = 0
    for (let index = 0; index < 100; index++) {
        blocks.fill(
        STONE_BRICKS,
        pos(паркан, 0, -1),
        pos(паркан, 5, -1),
        FillOperation.Replace
        )
        blocks.place(STONE_BRICK_STAIRS, pos(паркан, 0, 0))
        blocks.place(STONE_BRICK_STAIRS, pos(паркан, 5, 0))
        паркан += 1
    }
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(20, 0, -3),
    pos(27, 20, 3),
    FillOperation.Hollow
    )
    blocks.fill(
    AIR,
    pos(22, 0, -3),
    pos(26, 4, 3),
    FillOperation.Hollow
    )
    blocks.fill(
    OAK_FENCE,
    pos(22, 0, 3),
    pos(26, 4, 3),
    FillOperation.Hollow
    )
    blocks.fill(
    OAK_FENCE,
    pos(22, 0, -3),
    pos(26, 4, -3),
    FillOperation.Hollow
    )
    blocks.fill(
    IRON_DOOR,
    pos(25, 0, 3),
    pos(25, 0, 3),
    FillOperation.Hollow
    )
    blocks.fill(
    IRON_DOOR,
    pos(25, 0, -3),
    pos(25, 0, -3),
    FillOperation.Hollow
    )
    blocks.fill(
    LEVER,
    pos(26, 0, -3),
    pos(26, 0, -3),
    FillOperation.Hollow
    )
    blocks.fill(
    LEVER,
    pos(26, 0, 3),
    pos(26, 0, 3),
    FillOperation.Hollow
    )
    blocks.fill(
    LADDER,
    pos(27, 0, 4),
    pos(27, 20, 4),
    FillOperation.Replace
    )
    blocks.fill(
    OAK_FENCE,
    pos(22, 0, -3),
    pos(26, 4, -3),
    FillOperation.Hollow
    )
    blocks.fill(
    OAK_FENCE,
    pos(20, 21, -3),
    pos(27, 21, -3),
    FillOperation.Replace
    )
    blocks.fill(
    OAK_FENCE,
    pos(20, 21, 3),
    pos(26, 21, 3),
    FillOperation.Replace
    )
    blocks.fill(
    OAK_FENCE,
    pos(20, 21, 3),
    pos(20, 21, -3),
    FillOperation.Replace
    )
    blocks.fill(
    OAK_FENCE,
    pos(27, 21, 3),
    pos(27, 21, -3),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(90, 0, -3),
    pos(97, 20, 3),
    FillOperation.Hollow
    )
    blocks.fill(
    AIR,
    pos(92, 0, -3),
    pos(96, 4, 3),
    FillOperation.Hollow
    )
    blocks.fill(
    OAK_FENCE,
    pos(92, 0, 3),
    pos(96, 4, 3),
    FillOperation.Hollow
    )
    blocks.fill(
    OAK_FENCE,
    pos(92, 0, -3),
    pos(92, 4, -3),
    FillOperation.Hollow
    )
    blocks.fill(
    BAMBOO_FENCE,
    pos(24, 21, -3),
    pos(24, 25, -3),
    FillOperation.Replace
    )
    blocks.fill(
    LIGHT_BLUE_CONCRETE,
    pos(24, 25, -3),
    pos(24, 25, -5),
    FillOperation.Replace
    )
    blocks.fill(
    YELLOW_CONCRETE,
    pos(24, 24, -3),
    pos(24, 24, -5),
    FillOperation.Replace
    )
}
function БЕБРА3 () {
    паркан = 0
    for (let index = 0; index < 100; index++) {
        blocks.fill(
        STONE_BRICKS,
        pos(0, 0, паркан),
        pos(0, 5, паркан),
        FillOperation.Replace
        )
        blocks.place(STONE_BRICK_STAIRS, pos(паркан, 0, -24))
        blocks.place(STONE_BRICK_STAIRS, pos(паркан, 5, -24))
        паркан += 1
    }
}
player.onChat("денис", function () {
    БЕБРА()
    БЕБРА2()
    БЕБРА3()
})
