import { Quality, QualityPipe } from "./quality.pipe"

describe('QualityPipe', () => {

    it('should display Excellent if value is 4.5', () => {
        //arange
        const pipe = new QualityPipe()
        
        //act
        let result = pipe.transform(4.5)

        //assert
        expect(result).toEqual(Quality.EXCELLENT)
    })

    it('should display Bad if value is 1', () => {
        //arange
        const pipe = new QualityPipe()
        
        //act
        let result = pipe.transform(1)

        //assert
        expect(result).toEqual(Quality.BAD)
    })


    it('should display Good if value is 3', () => {
        //arange
        const pipe = new QualityPipe()
        
        //act
        let result = pipe.transform(3)

        //assert
        expect(result).toEqual(Quality.GOOD)
    })

    it('should display Bad if value is 0', () => {
        //arange
        const pipe = new QualityPipe()
        
        //act
        let result = pipe.transform(0)

        //assert
        expect(result).toEqual(Quality.BAD)
    })


    it('should display Unknow if value does not exist', () => {
        //arange
        const pipe = new QualityPipe()
        
        //act
        //@ts-ignore
        let result = pipe.transform(undefined)

        //assert
        expect(result).toEqual(Quality.UNKNOW)
    })
})