<template>
    <div>
        <el-page-header title="" @back="goBack" content="电机修复工序流程：机械检查和处理（滑动轴承）">
        </el-page-header>
        <div class="jixieH-container">
            <formhead></formhead>
            <div class="jixieH-process">
                <transition name="el-zoom-in-top">
                    <div class="jixieH-form">
                        <el-form :rules="rules1" ref="form1" :model="form1" label-width="auto"  label-position="left">
                            <el-card shadow="never">
                                <div class="jixieH-title">
                                    负荷端
                                </div>
                                <el-row :gutter="20">
                                    <el-col :span="4">
                                        <el-form-item label="轴瓦" label-width="40px"></el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="load.zhouwaDing" label-width="60px" label="顶间隙">
                                            <el-input-number size="small" :precision="2" :step="0.01" :max="99.99" v-model="form1.load.zhouwaDing">
                                                <template slot="append">mm</template>
                                            </el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="load.zhouwaCe" label-width="60px" label="侧间隙">
                                            <el-input-number size="small" :precision="2" :step="0.01" :max="99.99" v-model="form1.load.zhouwaCe">
                                                <template slot="append">mm</template>
                                            </el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="达标" label-width="40px" prop="load.dabiaoZhouwa">
                                            <el-radio v-model="form1.load.dabiaoZhouwa" label="1">是</el-radio>
                                            <el-radio v-model="form1.load.dabiaoZhouwa" label="0">否</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6">
                                        <el-form-item label="接触面检查" label-width="100px" prop="load.jiechumian">
                                            <el-radio v-model="form1.load.jiechumian" label="1">是</el-radio>
                                            <el-radio v-model="form1.load.jiechumian" label="0">否</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="达标" label-width="40px" prop="load.dabiaoJiechumian">
                                            <el-radio v-model="form1.load.dabiaoJiechumian" label="1">是</el-radio>
                                            <el-radio v-model="form1.load.dabiaoJiechumian" label="0">否</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="处理" label-width="40px" prop="load.chuliZhouwa">
                                            <el-radio v-model="form1.load.chuliZhouwa" label="1">更换</el-radio>
                                            <el-radio v-model="form1.load.chuliZhouwa" label="2">补焊</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item prop="load.fuheZhouwaDing" label-width="100px" label="复核顶间隙">
                                            <el-input-number size="small" :precision="2" :step="0.01" :max="99.99" v-model="form1.load.fuheZhouwaDing">
                                                <template slot="append">mm</template>
                                            </el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="load.fuheZhouwaCe" label-width="60px" label="侧间隙">
                                            <el-input-number size="small" :precision="2" :step="0.01" :max="99.99" v-model="form1.load.fuheZhouwaCe">
                                                <template slot="append">mm</template>
                                            </el-input-number>
                                        </el-form-item>
                                    </el-col>
                                </el-row>


                                <el-divider></el-divider>


                                <el-row>
                                    <el-col :span="4">
                                        <el-form-item label="轴瓦加工图纸">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-button>上传图片</el-button>
                                    </el-col>
                                </el-row>

                                <el-divider></el-divider>

                                
                                <el-form-item label="轴伸" label-width="60px" prop="load.zhoushen">
                                    <el-radio v-model="form1.load.zhoushen" label="1">柱</el-radio>
                                    <el-radio v-model="form1.load.zhoushen" label="2">锥</el-radio>
                                </el-form-item>
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.zhoushenWaijing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.zhoushenWaijing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="load.zhoushenWaijing.num" label="外径">
                                                        <el-input type="text" v-enter-number v-model="form1.load.zhoushenWaijing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.zhoushenWaijing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.zhoushenWaijing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.fuheZhoushenWaijing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.fuheZhoushenWaijing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="load.fuheZhoushenWaijing.num" label="复核：外径">
                                                        <el-input type="text" v-enter-number v-model="form1.load.fuheZhoushenWaijing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.fuheZhoushenWaijing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.fuheZhoushenWaijing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8">
                                        <el-form-item label="达标" prop="load.dabiaoZhoushen">
                                            <el-radio v-model="form1.load.dabiaoZhoushen" label="1">是</el-radio>
                                            <el-radio v-model="form1.load.dabiaoZhoushen" label="0">否</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="处理" prop="load.chuliWaijing">
                                            <el-radio v-model="form1.load.chuliWaijing" label="1">补焊</el-radio>
                                            <el-radio v-model="form1.load.chuliWaijing" label="2">换位开槽</el-radio>
                                            <el-radio v-model="form1.load.chuliWaijing" label="3">修复</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-divider></el-divider>


                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.zhoujing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.zhoujing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="load.zhoujing.num" label="轴颈">
                                                        <el-input type="text" v-enter-number v-model="form1.load.zhoujing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.zhoujing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.zhoujing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.fuheZhoujing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.fuheZhoujing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="load.fuheZhoujing.num" label="加工完毕后复核">
                                                        <el-input type="text" v-enter-number v-model="form1.load.fuheZhoujing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.fuheZhoujing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.fuheZhoujing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-form-item label="达标" prop="load.dabiaoZhoujing">
                                    <el-radio v-model="form1.load.dabiaoZhoujing" label="1">是</el-radio>
                                    <el-radio v-model="form1.load.dabiaoZhoujing" label="0">否</el-radio>
                                </el-form-item>

                                <el-divider></el-divider>

                                <el-row>
                                    <el-col :span="4">
                                        <el-form-item label="转轴加工图纸">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-button>上传图片</el-button>
                                    </el-col>
                                </el-row>

                                <el-divider></el-divider>


                                <el-form-item label="瓦弧检查">
                                    <el-checkbox v-model="form1.load.wahu.jueyuan">绝缘层完好</el-checkbox>
                                    <el-checkbox v-model="form1.load.wahu.wubianxing">瓦弧无变形、高点</el-checkbox>
                                </el-form-item>

                                <el-form-item prop="load.wahu.quexian" label="缺陷情况">
                                    <el-input size="small" show-word-limit :maxlength="50" v-model="form1.load.wahu.quexian"></el-input>
                                </el-form-item>

                                <el-form-item prop="load.wahu.chuli" label="处理情况">
                                    <el-input size="small" show-word-limit :maxlength="50" v-model="form1.load.wahu.chuli"></el-input>
                                </el-form-item>
                                
                            
                            </el-card>


                            <el-card shadow="never">
                                <div class="jixieH-title">
                                    无负荷端
                                </div>
                                <el-row :gutter="20">
                                    <el-col :span="4">
                                        <el-form-item label="轴瓦" label-width="40px"></el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="load.zhouwaDing" label-width="60px" label="顶间隙">
                                            <el-input-number size="small" :precision="2" :step="0.01" :max="99.99" v-model="form1.load.zhouwaDing">
                                                <template slot="append">mm</template>
                                            </el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="load.zhouwaCe" label-width="60px" label="侧间隙">
                                            <el-input-number size="small" :precision="2" :step="0.01" :max="99.99" v-model="form1.load.zhouwaCe">
                                                <template slot="append">mm</template>
                                            </el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="达标" label-width="40px" prop="load.dabiaoZhouwa">
                                            <el-radio v-model="form1.load.dabiaoZhouwa" label="1">是</el-radio>
                                            <el-radio v-model="form1.load.dabiaoZhouwa" label="0">否</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6">
                                        <el-form-item label="接触面检查" label-width="100px" prop="noLoad.jiechumian">
                                            <el-radio v-model="form1.noLoad.jiechumian" label="1">是</el-radio>
                                            <el-radio v-model="form1.noLoad.jiechumian" label="0">否</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="达标" label-width="40px" prop="noLoad.dabiaoJiechumian">
                                            <el-radio v-model="form1.noLoad.dabiaoJiechumian" label="1">是</el-radio>
                                            <el-radio v-model="form1.noLoad.dabiaoJiechumian" label="0">否</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="处理" label-width="40px" prop="noLoad.chuliZhouwa">
                                            <el-radio v-model="form1.noLoad.chuliZhouwa" label="1">更换</el-radio>
                                            <el-radio v-model="form1.noLoad.chuliZhouwa" label="2">补焊</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item prop="noLoad.fuheZhouwaDing" label-width="100px" label="复核顶间隙">
                                            <el-input-number size="small" :precision="2" :step="0.01" :max="99.99" v-model="form1.noLoad.fuheZhouwaDing">
                                                <template slot="append">mm</template>
                                            </el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="noLoad.fuheZhouwaCe" label-width="60px" label="侧间隙">
                                            <el-input-number size="small" :precision="2" :step="0.01" :max="99.99" v-model="form1.noLoad.fuheZhouwaCe">
                                                <template slot="append">mm</template>
                                            </el-input-number>
                                        </el-form-item>
                                    </el-col>
                                </el-row>


                                <el-divider></el-divider>


                                <el-row>
                                    <el-col :span="4">
                                        <el-form-item label="轴瓦加工图纸">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-button>上传图片</el-button>
                                    </el-col>
                                </el-row>

                                <el-divider></el-divider>

                                
                                <el-form-item label="轴伸" label-width="60px" prop="noLoad.zhoushen">
                                    <el-radio v-model="form1.noLoad.zhoushen" label="1">柱</el-radio>
                                    <el-radio v-model="form1.noLoad.zhoushen" label="2">锥</el-radio>
                                </el-form-item>
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.zhoushenWaijing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.zhoushenWaijing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="noLoad.zhoushenWaijing.num" label="外径">
                                                        <el-input type="text" v-enter-number v-model="form1.noLoad.zhoushenWaijing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.zhoushenWaijing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.zhoushenWaijing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.fuheZhoushenWaijing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.fuheZhoushenWaijing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="noLoad.fuheZhoushenWaijing.num" label="复核：外径">
                                                        <el-input type="text" v-enter-number v-model="form1.noLoad.fuheZhoushenWaijing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.fuheZhoushenWaijing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.fuheZhoushenWaijing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8">
                                        <el-form-item label="达标" prop="noLoad.dabiaoZhoushen">
                                            <el-radio v-model="form1.noLoad.dabiaoZhoushen" label="1">是</el-radio>
                                            <el-radio v-model="form1.noLoad.dabiaoZhoushen" label="0">否</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="处理" prop="noLoad.chuliWaijing">
                                            <el-radio v-model="form1.noLoad.chuliWaijing" label="1">补焊</el-radio>
                                            <el-radio v-model="form1.noLoad.chuliWaijing" label="2">换位开槽</el-radio>
                                            <el-radio v-model="form1.noLoad.chuliWaijing" label="3">修复</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-divider></el-divider>


                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.zhoujing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.zhoujing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="noLoad.zhoujing.num" label="轴颈">
                                                        <el-input type="text" v-enter-number v-model="form1.noLoad.zhoujing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.zhoujing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.zhoujing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.fuheZhoujing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.fuheZhoujing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="noLoad.fuheZhoujing.num" label="加工完毕后复核">
                                                        <el-input type="text" v-enter-number v-model="form1.noLoad.fuheZhoujing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.fuheZhoujing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.fuheZhoujing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-form-item label="达标" prop="noLoad.dabiaoZhoujing">
                                    <el-radio v-model="form1.noLoad.dabiaoZhoujing" label="1">是</el-radio>
                                    <el-radio v-model="form1.noLoad.dabiaoZhoujing" label="0">否</el-radio>
                                </el-form-item>

                                <el-divider></el-divider>

                                <el-row>
                                    <el-col :span="4">
                                        <el-form-item label="转轴加工图纸">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-button>上传图片</el-button>
                                    </el-col>
                                </el-row>

                                <el-divider></el-divider>


                                <el-row :gutter="20">
                                    <el-form-item label-width="80px" label="瓦弧检查">
                                        <el-checkbox v-model="form1.noLoad.wahu.jueyuan">绝缘层完好</el-checkbox>
                                        <el-checkbox v-model="form1.noLoad.wahu.wubianxing">瓦弧无变形、高点</el-checkbox>
                                    </el-form-item>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-form-item prop="noLoad.wahu.quexian" label="缺陷情况" label-width="80px">
                                        <el-input size="small" show-word-limit :maxlength="50" v-model="form1.noLoad.wahu.quexian"></el-input>
                                    </el-form-item>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-form-item prop="noLoad.wahu.chuli" label="处理情况" label-width="80px">
                                        <el-input size="small" show-word-limit :maxlength="50" v-model="form1.noLoad.wahu.chuli"></el-input>
                                    </el-form-item>
                                </el-row>
                            </el-card>

                            <el-card shadow="never">
                                <div class="jixieH-title">
                                    其他附件缺陷处理
                                </div>
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="集电环（整流子）更换" prop="other.jidianhuan">
                                            <el-radio v-model="form1.other.jidianhuan" label="1">是</el-radio>
                                            <el-radio v-model="form1.other.jidianhuan" label="0">否</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="是否车削" prop="other.chexiao">
                                            <el-radio v-model="form1.other.chexiao" label="1">是</el-radio>
                                            <el-radio v-model="form1.other.chexiao" label="0">否</el-radio>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-form-item label="新制或更换集电环尺寸记录"></el-form-item>
                                    
                                    <el-row :gutter="20">
                                        <el-col :span="6">
                                            <el-form-item prop="other.huanWaijing" label-width="80px" label="环外径Ф">
                                                <el-input v-model="form1.other.huanWaijing" v-enter-number show-word-limit :maxlength="3"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="6">
                                            <el-form-item prop="other.huanNeijing" label-width="80px" label="环内径Ф">
                                                <el-input v-model="form1.other.huanNeijing" v-enter-number show-word-limit :maxlength="3"></el-input>
                                            </el-form-item>
                                        </el-col>

                                        <el-col :span="6">
                                            <el-form-item prop="other.huanjianjv"  label-width="100px" label="环之间距离">
                                                <el-input size="small" type="text" v-enter-number show-word-limit :maxlength="2" v-model="form1.other.huanjianjv">
                                                    <template slot="append">mm</template>
                                                </el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="6">
                                            <el-form-item prop="other.huandingweijv" label-width="100px" label="环定位距离">
                                                <el-input size="small" type="text" v-enter-number show-word-limit :maxlength="3" v-model="form1.other.huandingweijv">
                                                    <template slot="append">mm</template>
                                                </el-input>
                                            </el-form-item>
                                        </el-col>
                                            
                                        
                                    </el-row>
                                </el-row>

                                <el-divider></el-divider>


                                <el-row :gutter="20">
                                    <el-col :span="3">
                                        <el-form-item label="碳刷" label-width="40px"></el-form-item>
                                    </el-col>
                                    
                                    <el-col :span="7">
                                        <el-form-item label="更换" prop="other.tanshuaGenghuan">
                                            <el-radio v-model="form1.other.tanshuaGenghuan" label="1">是</el-radio>
                                            <el-radio v-model="form1.other.tanshuaGenghuan" label="0">否</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="接触面是否到位" prop="other.jiechumian">
                                            <el-radio v-model="form1.other.jiechumian" label="1">是</el-radio>
                                            <el-radio v-model="form1.other.jiechumian" label="0">否</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="刷架杆绝缘是否合格" prop="other.jueyuan">
                                            <el-radio v-model="form1.other.jueyuan" label="1">是</el-radio>
                                            <el-radio v-model="form1.other.jueyuan" label="0">否</el-radio>
                                        </el-form-item>
                                    </el-col>
                                </el-row>


                                <el-divider></el-divider>


                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="other.fengyeNeijing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.other.fengyeNeijing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="other.fengyeNeijing.num" label="风叶内径">
                                                        <el-input type="text" v-enter-number v-model="form1.other.fengyeNeijing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="other.fengyeNeijing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.other.fengyeNeijing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="other.fengyeFuhe.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.other.fengyeFuhe.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="other.fengyeFuhe.num" label="新制加工完毕后复核">
                                                        <el-input type="text" v-enter-number v-model="form1.other.fengyeFuhe.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="other.fengyeFuhe.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.other.fengyeFuhe.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                </el-row>

                                <el-row>
                                    <el-col :span="8">
                                        <el-form-item prop="other.fengyeGenghuan" label="更换">
                                            <el-radio v-model="form1.other.fengyeGenghuan" label="1">是</el-radio>
                                            <el-radio v-model="form1.other.fengyeGenghuan" label="0">否</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="other.fengzhao" label="风罩修理或更换">
                                            <el-radio v-model="form1.other.fengzhao" label="1">是</el-radio>
                                            <el-radio v-model="form1.other.fengzhao" label="0">否</el-radio>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-divider></el-divider>


                                <el-row>
                                    <el-col :span="4">
                                        <el-form-item label="负荷端大盖葫芦头"></el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="other.load.hulutouGenghuan" label="加工或更换">
                                            <el-radio v-model="form1.other.load.hulutouGenghuan" label="1">是</el-radio>
                                            <el-radio v-model="form1.other.load.hulutouGenghuan" label="0">否</el-radio>
                                        </el-form-item>
                                    </el-col>

                                </el-row>
                                
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="other.load.hulutouWaijing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.other.load.hulutouWaijing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="other.load.hulutouWaijing.num" label="葫芦头外径">
                                                        <el-input type="text" v-enter-number v-model="form1.other.load.hulutouWaijing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="other.load.hulutouWaijing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.other.load.hulutouWaijing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="other.load.dagaiNeijing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.other.load.dagaiNeijing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="other.load.dagaiNeijing.num" label="大盖内孔内径">
                                                        <el-input type="text" v-enter-number v-model="form1.other.load.dagaiNeijing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="other.load.dagaiNeijing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.other.load.dagaiNeijing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                </el-row>

                                <el-divider></el-divider>

                                <el-row>
                                    <el-col :span="4">
                                        <el-form-item label="无负荷端大盖葫芦头"></el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="other.noLoad.hulutouGenghuan" label="加工或更换">
                                            <el-radio v-model="form1.other.noLoad.hulutouGenghuan" label="1">是</el-radio>
                                            <el-radio v-model="form1.other.noLoad.hulutouGenghuan" label="0">否</el-radio>
                                        </el-form-item>
                                    </el-col>

                                </el-row>
                                
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="other.noLoad.hulutouWaijing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.other.noLoad.hulutouWaijing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="other.noLoad.hulutouWaijing.num" label="葫芦头外径">
                                                        <el-input type="text" v-enter-number v-model="form1.other.noLoad.hulutouWaijing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="other.noLoad.hulutouWaijing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.other.noLoad.hulutouWaijing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="other.noLoad.dagaiNeijing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.other.noLoad.dagaiNeijing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="other.noLoad.dagaiNeijing.num" label="大盖内孔内径">
                                                        <el-input type="text" v-enter-number v-model="form1.other.noLoad.dagaiNeijing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="other.noLoad.dagaiNeijing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.other.noLoad.dagaiNeijing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                </el-row>

                                <el-divider></el-divider>

                                <el-row>
                                    <el-col :span="8">
                                        <el-form-item prop="other.reMeasure" label-width="180px" label="转轴定位尺寸重新测量">
                                            <el-radio v-model="form1.other.reMeasure" label="1">是</el-radio>
                                            <el-radio v-model="form1.other.reMeasure" label="0">否</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="other.dianjizhoujian"  label-width="280px" label="电机两端轴承台轴肩间距（电机定位尺寸）">
                                            <el-input size="small" v-model="form1.other.dianjizhoujian" show-word-limit type="text" v-enter-number :maxlength="3"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    
                                </el-row>
                                <el-row>
                                    <el-col :span="6">
                                        <el-form-item v-if="ABCType == 'A' || 'B' || 'C'" prop="other.sure1" label="确认人1">
                                            <el-input size="small" v-model="form1.other.sure1"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item v-if="ABCType == 'A' || 'B'" prop="other.sure2" label="确认人2">
                                            <el-input size="small" v-model="form1.other.sure2"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item v-if="ABCType == 'C'" prop="other.sure3" label="确认人3">
                                            <el-input size="small" v-model="form1.other.sure3"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                
                                <el-divider></el-divider>

                                <el-form-item prop="remark" label="备注">
                                    <el-input size="small" type="textarea" :rows="2" show-word-limit :maxlength="40"></el-input>
                                </el-form-item>


                                <el-row>
                                    <el-col :span="8">
                                        <el-form-item prop="measure" label="测量工具">
                                            <el-input size="small" v-model="form1.measure"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="ID" label="编号">
                                            <el-input size="small" v-model="form1.ID"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="test" label="是否校验">
                                            <el-radio v-model="form1.test" label="1">是</el-radio>
                                            <el-radio v-model="form1.test" label="0">否</el-radio>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6">
                                        <el-form-item prop="sureMan" label="确认人">
                                            <el-input size="small" v-model="form1.sureMan" show-word-limit :maxlength="3"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>
                            
                            

                            

                            <el-row :gutter="20">
                                <el-col :span="16" :offset="8">
                                    <el-form-item style="float: right">
                                        <el-button >打印表格</el-button>
                                        <el-button :v-if="powerSure" type="primary">确认</el-button>
                                        <el-button :v-if="powerCancelSure" type="danger">取消确认</el-button>
                                        <el-button @click="goBack">返回</el-button>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            
                        </el-form>
                        
                    </div>
                </transition>
                <!-- <transition name="el-zoom-in-top">
                    <div v-show="daxiu" class="jixieH-form">
                        <el-form :rules="rules2" ref="form2" :model="form2" label-position="left">
                            
                        </el-form>
                        
                        
                    </div>
                </transition> -->
            </div>
        </div>
        
    </div>
</template>


<script>
import Formhead from '@/views/table/process/components/FormHead';
export default {
    components: {
        Formhead
    },
    methods: {
      goBack() {
        console.log('go back');
        // 回到 @/views/table/process/index
      },
      goNext() {
        //   console.log(this.form1.project.type)
          this.daxiu = true;
      },
    },
     data() {
         return {
             powerSure: true,
            powerCancelSure: true,
             ABCType: 'C',
             zhouchengFormat: 'gundong',
             daxiu: true,
             form1: {
                
             },

             form1: {
                 load: {
                     zhouwaDing: '',
                     zhouwaCe: '',
                     dabiaoZhouwa: '',
                     jiechumian:'',
                     dabiaoJiechumian: '',
                     chuliZhouwa: '',
                     fuheZhouwaDing: '',
                     fuheZhouwaCe: '',
                     zhouwaURL: '',
                     zhoushen: '',
                     zhoushenWaijing: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     dabiaoZhoushen: '',
                     chuliZhoushen: '',
                     fuheZhoushenWaijing: {
                         top: '',
                         num :'',
                         bottom: ''
                     },
                     zhoujing: {
                         top: '',
                         num :'',
                         bottom: ''
                     },
                     dabiaoZhoujing: '',
                     fuheZhoujing: {
                         top: '',
                         num :'',
                         bottom: ''
                     },
                     zhuanzhouURL: '',
                     wahu: {
                         Jueyuan: '',
                         wubianxing: '',
                         quexian: '',
                         chuli: ''
                     },
                 },

                 noLoad: {
                     zhouwaDing: '',
                     zhouwaCe: '',
                     dabiaoZhouwa: '',
                     jiechumian:'',
                     dabiaoJiechumian: '',
                     chuliZhouwa: '',
                     fuheZhouwaDing: '',
                     fuheZhouwaCe: '',
                     zhouwaURL: '',
                     zhoushen: '',
                     zhoushenWaijing: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     dabiaoZhoushen: '',
                     chuliZhoushen: '',
                     fuheZhoushenWaijing: {
                         top: '',
                         num :'',
                         bottom: ''
                     },
                     zhoujing: {
                         top: '',
                         num :'',
                         bottom: ''
                     },
                     dabiaoZhoujing: '',
                     fuheZhoujing: {
                         top: '',
                         num :'',
                         bottom: ''
                     },
                     zhuanzhouURL: '',
                     wahu: {
                         Jueyuan: '',
                         wubianxing: '',
                         quexian: '',
                         chuli: ''
                     },
                 },

                 other: {
                     jidianhuan: '',
                     chexiao: '',
                     huanWaijing: '',
                     huanWaijing: '',
                     huanNeijing: '',
                     huanjianjv:'',
                     huandingweijv: '',
                     tanshuaGenghuan: '',
                     tanshuaNum: '',
                     jiechumian: '',
                     jueyuan: '',
                     fengyeNeijing: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     fengyeGenghuan: '',
                     fengyeFuhe: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     fengzhao: '',
                     load: {
                         hulutouGenghuan: '',
                        hulutouWaijing: {
                            top: '',
                            num:'',
                            bottom: '',
                        },
                        dagaiNeijing: {
                            top: '',
                            num: '',
                            bottom:''
                        }
                     },
                     noLoad: {
                          hulutouGenghuan: '',
                        hulutouWaijing: {
                            top: '',
                            num:'',
                            bottom: '',
                        },
                        dagaiNeijing: {
                            top: '',
                            num: '',
                            bottom:''
                        }
                     },
                     reMeasure: '',
                     dianjizhoujian: '',
                     sure1: '',
                    sure2: '',
                    sure3: ''
                 },
                 remark: '',
                 measure:'',
                 ID:'',
                 test: '',
                 
                sureMan: '',
             },

             form2: {

             },
             
             rules1: {
                
             },

             rules2: {

             },
             tableData: [
                 
            ],

         }
     }
}
</script>

<style lang="scss">
    .el-page-header {
        font-size: 30px;
        padding: 20px;
    }

    .jixieH {
        &-container {
            padding-left: 20px;
            padding-right: 30px;
        }
        &-title {
            font-size: 20px;
            margin-bottom: 30px;
        }

        &-safe {
            margin: 30px;
        }

        // &-form {
        // }
    }

    .input-title {
            display: inline-block;
            font-weight: 900;
            font-size: 14px;
            color: #606266;
            margin-left: 10px;
            margin-right: 10px;
            // margin-bottom: 20px;
        }

</style>