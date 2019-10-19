<template>
    <div>
        <el-page-header title="" @back="goBack" content="电机修复工序流程：机械检查和处理（滚动轴承）">
        </el-page-header>
        <div class="jixieG-container">
            <formhead></formhead>
            <div class="jixieG-process">
                <transition name="el-zoom-in-top">
                    <div class="jixieG-form">
                        <el-form :rules="rules1" ref="form1" label-width="auto" :model="form1"  label-position="left">
                            <el-card shadow="never">
                                <div class="jixieG-title">
                                    负荷端
                                </div>
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.dagaiNeikong.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.dagaiNeikong.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="load.dagaiNeikong.num" label="大盖：内孔">
                                                        <el-input type="text" v-enter-number v-model="form1.load.dagaiNeikong.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.dagaiNeikong.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.dagaiNeikong.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.fuheNeikong.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.fuheNeikong.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="load.fuheNeikong.num" label="复核：内孔">
                                                        <el-input type="text" v-enter-number v-model="form1.load.fuheNeikong.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.fuheNeikong.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.fuheNeikong.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8">
                                        <el-form-item label="达标" prop="load.dabiaoNeikong">
                                            <el-radio v-model="form1.load.dabiaoNeikong" label="1">是</el-radio>
                                            <el-radio v-model="form1.load.dabiaoNeikong" label="0">否</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="处理" prop="load.chuliNeikong">
                                            <el-radio v-model="form1.load.chuliNeikong" label="1">更换</el-radio>
                                            <el-radio v-model="form1.load.chuliNeikong" label="2">补焊</el-radio>
                                            <el-radio v-model="form1.load.chuliNeikong" label="3">镶套</el-radio>                                            
                                            <el-radio v-model="form1.load.chuliNeikong" label="4">冷焊</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                </el-row>


                                <el-divider></el-divider>


                                <el-row>
                                    <el-col :span="4">
                                        <el-form-item label="处理大盖图纸">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-button>上传图片</el-button>
                                    </el-col>
                                </el-row>

                                <el-divider></el-divider>

                                
                                <el-form-item label="轴伸" prop="load.zhoushen">
                                    <el-radio v-model="form1.load.zhoushen" label="1">柱</el-radio>
                                    <el-radio v-model="form1.load.zhoushen" label="2">锥</el-radio>
                                </el-form-item>
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.waijing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.waijing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="load.waijing.num" label="外径">
                                                        <el-input type="text" v-enter-number v-model="form1.load.waijing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.waijing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.waijing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.fuheWaijing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.fuheWaijing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="load.fuheWaijing.num" label="复核：外径">
                                                        <el-input type="text" v-enter-number v-model="form1.load.fuheWaijing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.fuheWaijing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.fuheWaijing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8">
                                        <el-form-item label="达标" prop="load.dabiaoWaijing">
                                            <el-radio v-model="form1.load.dabiaoWaijing" label="1">是</el-radio>
                                            <el-radio v-model="form1.load.dabiaoWaijing" label="0">否</el-radio>                                            
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

                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.fengyetai.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.fengyetai.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="load.fengyetai.num" label="风叶台">
                                                        <el-input type="text" v-enter-number v-model="form1.load.fengyetai.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.fengyetai.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.fengyetai.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.fuheFengyetai.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.fuheFengyetai.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="load.fuheFengyetai.num" label="加工完毕后复核">
                                                        <el-input type="text" v-enter-number v-model="form1.load.fuheFengyetai.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="load.fuheFengyetai.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.load.fuheFengyetai.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-form-item label="达标" prop="load.dabiaoFengyetai">
                                    <el-radio v-model="form1.load.dabiaoFengyetai" label="1">是</el-radio>
                                    <el-radio v-model="form1.load.dabiaoFengyetai" label="0">否</el-radio>
                                </el-form-item>


                                <el-divider></el-divider>


                                <el-row>
                                    <el-col :span="4">
                                        <el-form-item label="处理转轴图纸">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-button>上传图片</el-button>
                                    </el-col>
                                </el-row>
                            
                                <el-divider></el-divider>

                                <el-row>
                                    <!-- <el-col :span="4"> -->
                                        <el-form-item label="原始轴承型号">
                                        </el-form-item>
                                    <!-- </el-col>     -->
                                    <el-row :gutter="20">
                                        <el-col :span="12">
                                            <el-form-item prop="load.preZhoucheng.nei" label="内">
                                                <el-input size="small" show-word-limit :maxlength="15" v-model="form1.load.preZhoucheng.nei"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="load.preZhoucheng.youxiNei" label="游隙：内（mm）">
                                                <el-input-number size="small" v-model="form1.load.preZhoucheng.youxiNei" :precision="2" :step="0.01" :max="9.99" :min="0" controls-position="right"></el-input-number>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-form-item prop="load.preZhoucheng.wai" label="外">
                                                <el-input size="small" show-word-limit :maxlength="15" v-model="form1.load.preZhoucheng.wai"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="load.preZhoucheng.youxiWai" label="游隙：外（mm）">
                                                <el-input-number size="small" v-model="form1.load.preZhoucheng.youxiWai" :precision="2" :step="0.01" :max="9.99" :min="0" controls-position="right"></el-input-number>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                </el-row>

                                <el-row>
                                    <!-- <el-col :span="4"> -->
                                        <el-form-item label="是否更换">
                                        </el-form-item>
                                    <!-- </el-col>     -->
                                    <el-row :gutter="20">
                                        <el-col :span="12">
                                            <el-form-item prop="load.genghuan.chooseNei" label="是否更换">
                                                <el-radio v-model="form1.load.genghuan.chooseNei" label="1">是</el-radio>
                                                <el-radio v-model="form1.load.genghuan.chooseNei" label="0">否</el-radio>
                                            </el-form-item>
                                            <el-form-item prop="load.genghuan.nei" label="内">
                                                <el-input size="small" show-word-limit :maxlength="15" v-model="form1.load.genghuan.nei"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="load.genghuan.youxiNei" label="游隙：内（mm）">
                                                <el-input-number size="small" v-model="form1.load.genghuan.youxiNei" :precision="2" :step="0.01" :max="9.99" :min="0" controls-position="right"></el-input-number>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-form-item prop="load.genghuan.chooseWai" label="是否更换">
                                                <el-radio v-model="form1.load.genghuan.chooseWai" label="1">是</el-radio>
                                                <el-radio v-model="form1.load.genghuan.chooseWai" label="0">否</el-radio>
                                            </el-form-item>
                                            <el-form-item prop="load.genghuan.wai" label="外">
                                                <el-input size="small" show-word-limit :maxlength="15" v-model="form1.load.genghuan.wai"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="load.genghuan.youxiWai" label="游隙：外（mm）">
                                                <el-input-number size="small" v-model="form1.load.genghuan.youxiWai" :precision="2" :step="0.01" :max="9.99" :min="0" controls-position="right"></el-input-number>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                </el-row>

                                <el-divider></el-divider>

                                <el-form-item prop="load.remark" label="备注">
                                    <el-input type="textarea" size="small" v-model="form1.load.remark" show-word-limit :maxlength="40" :rows="2"></el-input>
                                </el-form-item>

                            
                            </el-card>


                            <el-card shadow="never">
                                <div class="jixieG-title">
                                    无负荷端
                                </div>
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.dagaiNeikong.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.dagaiNeikong.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="noLoad.dagaiNeikong.num" label="大盖：内孔">
                                                        <el-input type="text" v-enter-number v-model="form1.noLoad.dagaiNeikong.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.dagaiNeikong.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.dagaiNeikong.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.fuheNeikong.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.fuheNeikong.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="noLoad.fuheNeikong.num" label="复核：内孔">
                                                        <el-input type="text" v-enter-number v-model="form1.noLoad.fuheNeikong.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.fuheNeikong.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.fuheNeikong.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8">
                                        <el-form-item label="达标" prop="noLoad.dabiaoNeikong">
                                            <el-radio v-model="form1.noLoad.dabiaoNeikong" label="1">是</el-radio>
                                            <el-radio v-model="form1.noLoad.dabiaoNeikong" label="0">否</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="处理" prop="noLoad.chuliNeikong">
                                            <el-radio v-model="form1.noLoad.chuliNeikong" label="1">更换</el-radio>
                                            <el-radio v-model="form1.noLoad.chuliNeikong" label="2">补焊</el-radio>
                                            <el-radio v-model="form1.noLoad.chuliNeikong" label="3">镶套</el-radio>                                            
                                            <el-radio v-model="form1.noLoad.chuliNeikong" label="4">冷焊</el-radio>                                            
                                        </el-form-item>
                                    </el-col>
                                </el-row>


                                <el-divider></el-divider>


                                <el-row>
                                    <el-col :span="4">
                                        <el-form-item label="处理大盖图纸">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-button>上传图片</el-button>
                                    </el-col>
                                </el-row>

                                <el-divider></el-divider>

                                
                                <el-form-item label="轴伸" prop="noLoad.zhoushen">
                                    <el-radio v-model="form1.noLoad.zhoushen" label="1">柱</el-radio>
                                    <el-radio v-model="form1.noLoad.zhoushen" label="2">锥</el-radio>
                                </el-form-item>
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.waijing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.waijing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="noLoad.waijing.num" label="外径">
                                                        <el-input type="text" v-enter-number v-model="form1.noLoad.waijing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.waijing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.waijing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.fuheWaijing.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.fuheWaijing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="noLoad.fuheWaijing.num" label="复核：外径">
                                                        <el-input type="text" v-enter-number v-model="form1.noLoad.fuheWaijing.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.fuheWaijing.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.fuheWaijing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8">
                                        <el-form-item label="达标" prop="noLoad.dabiaoWaijing">
                                            <el-radio v-model="form1.noLoad.dabiaoWaijing" label="1">是</el-radio>
                                            <el-radio v-model="form1.noLoad.dabiaoWaijing" label="0">否</el-radio>                                            
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

                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.fengyetai.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.fengyetai.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="noLoad.fengyetai.num" label="风叶台">
                                                        <el-input type="text" v-enter-number v-model="form1.noLoad.fengyetai.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.fengyetai.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.fengyetai.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-card>
                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.fuheFengyetai.top" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.fuheFengyetai.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="18">
                                                    <el-form-item prop="noLoad.fuheFengyetai.num" label="加工完毕后复核">
                                                        <el-input type="text" v-enter-number v-model="form1.noLoad.fuheFengyetai.num">
                                                            <template slot="prepend">Ф</template>    
                                                            <template slot="append">mm</template>    
                                                        </el-input>                                                
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>

                                            <el-row :gutter="2">
                                                <el-col :span="6" :offset="9">
                                                    <el-form-item prop="noLoad.fuheFengyetai.bottom" label-width="0">
                                                        <el-input-number size="mini" v-model="form1.noLoad.fuheFengyetai.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-form-item label="达标" prop="noLoad.dabiaoFengyetai">
                                    <el-radio v-model="form1.noLoad.dabiaoFengyetai" label="1">是</el-radio>
                                    <el-radio v-model="form1.noLoad.dabiaoFengyetai" label="0">否</el-radio>
                                </el-form-item>


                                <el-divider></el-divider>


                                <el-row>
                                    <el-col :span="4">
                                        <el-form-item label="处理转轴图纸">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-button>上传图片</el-button>
                                    </el-col>
                                </el-row>
                            
                                <el-divider></el-divider>

                                <el-row>
                                    <!-- <el-col :span="4"> -->
                                        <el-form-item label="原始轴承型号">
                                        </el-form-item>
                                    <!-- </el-col>     -->
                                    <el-row :gutter="20">
                                        <el-col :span="12">
                                            <el-form-item prop="noLoad.preZhoucheng.nei" label="内">
                                                <el-input size="small" show-word-limit :maxlength="15" v-model="form1.noLoad.preZhoucheng.nei"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="noLoad.preZhoucheng.youxiNei" label="游隙：内（mm）">
                                                <el-input-number size="small" v-model="form1.noLoad.preZhoucheng.youxiNei" :precision="2" :step="0.01" :max="9.99" :min="0" controls-position="right"></el-input-number>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-form-item prop="noLoad.preZhoucheng.wai" label="外">
                                                <el-input size="small" show-word-limit :maxlength="15" v-model="form1.noLoad.preZhoucheng.wai"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="noLoad.preZhoucheng.youxiWai" label="游隙：外（mm）">
                                                <el-input-number size="small" v-model="form1.noLoad.preZhoucheng.youxiWai" :precision="2" :step="0.01" :max="9.99" :min="0" controls-position="right"></el-input-number>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                </el-row>
                            </el-card>

                            <el-card shadow="never">
                                <div class="jixieG-title">
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
                                    <el-form-item label="集电环外径" prop="other.huanWaijing">
                                        <el-input size="samll" style="width: 30%" type="text" v-model="form1.other.huanWaijing" v-enter-number show-word-limit :maxlength="3">
                                            <template slot="prepend">Ф</template>
                                            <template slot="append">mm</template>
                                        </el-input>
                                    </el-form-item>
                                    
                                    <el-row :gutter="20">
                                        <el-col :span="12">
                                            <el-card>
                                                <el-row :gutter="2">
                                                    <el-col :span="6" :offset="9">
                                                        <el-form-item prop="other.huanNeijing.top" label-width="0">
                                                            <el-input-number size="mini" v-model="form1.other.huanNeijing.top" :precision="2" :step="0.01" :max="0.99" :min="0" controls-position="right"></el-input-number>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>

                                                <el-row :gutter="2">
                                                    <el-col :span="18">
                                                        <el-form-item prop="other.huanNeijing.num" label="集电环内径Ф">
                                                            <el-input type="text" v-enter-number v-model="form1.other.huanNeijing.num">
                                                                <template slot="prepend">Ф</template>    
                                                                <template slot="append">mm</template>    
                                                            </el-input>                                                
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>

                                                <el-row :gutter="2">
                                                    <el-col :span="6" :offset="9">
                                                        <el-form-item prop="other.huanNeijing.bottom" label-width="0">
                                                            <el-input-number size="mini" v-model="form1.other.huanNeijing.bottom" :precision="2" :step="0.01" :max="0" :min="-0.99" controls-position="right"></el-input-number>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                            </el-card>
                                        </el-col>

                                        <el-col :span="6">
                                            <el-form-item prop="other.huanjianjv" label="环之间距离">
                                                <el-input size="small" type="text" v-enter-number show-word-limit :maxlength="2" v-model="form1.other.huanjianjv">
                                                    <template slot="append">mm</template>
                                                </el-input>
                                            </el-form-item>
                                            <el-form-item prop="other.huandingweijv" label="环定位距离">
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
                                        <el-form-item v-if="form1.other.tanshuaGenghuan == '1'" prop="other.tanshuaNum">
                                            <el-input size="small" v-model="form1.other.tanshuaNum" show-word-limit :maxlength="2">
                                                <template slot="append">个</template>
                                            </el-input>
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
                                    <el-col :span="8">
                                        <el-form-item prop="other.sureMan" label="确认人">
                                            <el-input size="small" v-model="form1.other.sureMan" show-word-limit :maxlength="3"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                
                                <el-divider></el-divider>

                                <el-form-item prop="remark" label="备注">
                                    <el-input size="small" type="textarea" :rows="2" show-word-limit :maxlength="40"></el-input>
                                </el-form-item>

                                <el-divider></el-divider>

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
                            </el-card>

                            <el-row>
                                <el-col :span="6">
                                    <el-form-item v-if="ABCType == 'A' || 'B' || 'C'" prop="sure1" label="确认人1">
                                        <el-input size="small" v-model="form1.sure1"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item v-if="ABCType == 'A' || 'B'" prop="sure2" label="确认人2">
                                        <el-input size="small" v-model="form1.sure2"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item v-if="ABCType == 'C'" prop="sure3" label="确认人3">
                                        <el-input size="small" v-model="form1.sure3"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

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
                    <div v-show="daxiu" class="jixieG-form">
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
                     dagaiNeikong: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     dabiaoNeikong: '',
                     chuliNeikong: '',
                     fuheNeikong: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     dagaiURL: '',
                     zhoushen: '',
                     waijing: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     dabiaoWaijing: '',
                     chuliWaijing: '',
                     fuheWaijing: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     zhoujing: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     dabiaoZhoujing: '',
                     fuheZhoujing: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     fengyetai: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     fuheFengyetai: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     dabiaoFengyetai: '',
                     zhuanzhouURL: '',
                    preZhoucheng: {
                        nei:'',
                        youxiNei: '',
                        wai: '',
                        youxiWai: ''
                    },
                    genghuan: {
                        chooseNei: '',
                        nei:'',
                        youxiNei:'',
                        chooseWai: '',
                        wai:'',
                        youxiWai: ''
                    },
                    remark: ''
                 },

                 noLoad: {
                     dagaiNeikong: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     dabiaoNeikong: '',
                     chuliNeikong: '',
                     fuheNeikong: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     dagaiURL: '',
                     zhoushen: '',
                     waijing: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     dabiaoWaijing: '',
                     chuliWaijing: '',
                     fuheWaijing: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     zhoujing: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     dabiaoZhoujing: '',
                     fuheZhoujing: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     fengyetai: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     fuheFengyetai: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
                     dabiaoFengyetai: '',
                     zhuanzhouURL: '',
                    preZhoucheng: {
                        nei:'',
                        youxiNei: '',
                        wai: '',
                        youxiWai: ''
                    },
                 },

                 other: {
                     jidianhuan: '',
                     chexiao: '',
                     huanWaijing: '',
                     huanNeijing: {
                         top: '',
                         num: '',
                         bottom: ''
                     },
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
                     sureMan: '',
                 },
                 remark: '',
                 measure:'',
                 ID:'',
                 test: '',
                 sure1: '',
                sure2: '',
                sure3: ''
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

    .jixieG {
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